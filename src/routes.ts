import { FastifyInstance } from 'fastify';
import { demofunction, loginuser, registeruser } from './controller';
import { refreshfilter } from './handletoken.ts/refreshfilter';
import { accessfilter } from './handletoken.ts/accessfilter';

export const router=(fastify:FastifyInstance)=>{
    fastify.post("/register",registeruser)
    fastify.post("/login",loginuser)
    fastify.post("/refresh",refreshfilter)
    fastify.post("/demo",{preHandler:[accessfilter]},demofunction)
}