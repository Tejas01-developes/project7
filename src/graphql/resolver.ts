import { friendscollection } from "../schema/friends"

interface addusertype{
    name:string,
    email:string,
    age:string
}

export const resolver={
    Mutation:{
        adduser:async(_parent:any,args:addusertype,_ctx:any)=>{
            const loggeduserid=_ctx.id
            console.log(loggeduserid)
            if(!loggeduserid){
                return{
                    success:false,
                    message:"you are not logged in"
                }
            }
const{name,email,age}=args
await friendscollection.create({name,email,age})
return {
    success:true,
    message:"friend added"
}
        }
    }
}