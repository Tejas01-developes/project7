import fastify from 'fastify';
import cors from '@fastify/cors';
import formbody from '@fastify/formbody';
import cookie from '@fastify/cookie'
import db from './dbconnect/connectdb'
import { router } from './routes';

const app=fastify();

app.register(cors,{
    origin:"http://localhost:3000",
    methods:["GET","POST","PUT","DELETE","OPTIONS"],
    allowedHeaders:["Content-Type","Authorization"],
    credentials:true,
})
app.register(formbody)
app.register(cookie)
app.register(router,{prefix:"/apis"})


app.listen({port:4000},async()=>{
    await db.connect()
    console.log("Server startedon the port 4000")
})