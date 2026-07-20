import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import jwt, { JwtPayload } from 'jsonwebtoken';

interface reqtype extends FastifyRequest{
    id:string
}

export const accessfilter=(req:reqtype,resp:FastifyReply,next:HookHandlerDoneFunction):void=>{
const token=req.headers.authorization
const access=token?.split(" ")[1]

if(!access){
     resp.status(400).send("Access token is absent")
     return
}
try{
    const decode=jwt.verify(access,process.env.ACCESS_SECRET as string) as JwtPayload
    req.id=decode.id
    next()

}catch(err){
     resp.status(400).send("Access filter failed")
     return
}

}