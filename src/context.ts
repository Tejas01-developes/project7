import { FastifyReply, FastifyRequest} from "fastify";
import jwt, { JwtPayload } from 'jsonwebtoken';

interface reqtype extends FastifyRequest{
    id:string
}

export const setcontext=(req:reqtype,resp:FastifyReply)=>{
const token=req.headers.authorization
const access=token?.split(" ")[1]

if(!access){
     resp.status(401)
    throw new Error("Access token is absent")
}
try{
    const decode=jwt.verify(access,process.env.ACCESS_SECRET as string) as JwtPayload
    return{
      id:decode.id,
      isAuth:true

    }
   


}catch(err){
     resp.status(401)
     throw new Error("Access filter failed")
}

}