import { FastifyReply, FastifyRequest } from "fastify";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { accesstoken } from "./tokengenerate";


export const refreshfilter=(req:FastifyRequest,resp:FastifyReply)=>{
const refresh=req.cookies.refresh


if(!refresh){
    return resp.status(400).send("Refresh token is absent")
}
try{
    const decode=jwt.verify(refresh,process.env.REFRESH_SECRET as string) as JwtPayload
   
  const access=accesstoken(decode.id)
  return resp.status(200).send(access)

}catch(err){
    console.log(err)
    return resp.status(400).send("Refresh filter failed")
}

}