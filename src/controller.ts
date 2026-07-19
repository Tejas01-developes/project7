import { FastifyReply, FastifyRequest } from "fastify";
import { usercollection } from "./schema/userschema";
import bcrypt from 'bcrypt'
import { accesstoken, refreshtoken } from "./handletoken.ts/tokengenerate";
import { tokencollection } from "./schema/tokenschema";
export const registeruser=async(req:FastifyRequest,resp:FastifyReply)=>{
    const{name,email,password}=req.body as{
        name:string,
        email:string,
        password:string
    }
    if(!name || !email || !password){
        return resp.status(400).send("Filed not recived to the backend")
    }
    try{
        const userid=crypto.randomUUID()
        const hash=await bcrypt.hash(password,12)
        await usercollection.create({userid,name,email,password:hash})
        return resp.status(200).send("user added")
    }catch(err){
        return resp.status(400).send("Register api failed")
    }
}

export const loginuser=async(req:FastifyRequest,resp:FastifyReply)=>{
    const{email,password}=req.body as{
        email:string,
        password:string
    }
    if(!email || !password){
        return resp.status(400).send({success:false,message:"Filed not recived to the backend"})
    }
try{
    const res:any=await usercollection.findOne({email:email})

    if(!res){
        return resp.status(400).send({success:false,message:"no user wit this email"})
    }
    const compare=await bcrypt.compare(password,res.password)
    if(!compare){
        return resp.status(400).send({success:false,message:"Password is incorrect"})
    }
    const access:string=accesstoken(res.userid)
    let refresh:string

    const tokres=await tokencollection.findOne({userid:res.userid})
    if(!tokres){
      refresh=refreshtoken(res.userid)
      const tokenid=crypto.randomUUID()
      await tokencollection.create({token_id:tokenid,token:refresh,userid:res.userid,added_at:Date.now(),expired_at:new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)})
    }else{
        const now=Date.now()
        const expiretime=tokres.expired_at
        if(!expiretime || now > expiretime?.getTime()){
            refresh=refreshtoken(res.userid)
            await tokencollection.updateOne({userid:res.userid},{$set:{token:refresh,added_at:Date.now(),expired_at:new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}})
        }else{
            refresh=tokres.token
        }
       resp.cookie("refresh",refresh,{
      secure:true,
      sameSite:"lax",
      httpOnly:true,
      path:"/"
       })
       return resp.status(200).send({success:true,message:"login success",access})
    }
}catch(err){
    console.log(err)
    return resp.status(400).send({success:false,message:"Login api failed"})
}

}

export const demofunction=(req:FastifyRequest,resp:FastifyReply)=>{
return resp.status(200).send({success:true,message:"Demo function clicked"})
}