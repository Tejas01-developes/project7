"use client"

import { createContext, useEffect, useState } from "react";
import { clearaccess, setaccess } from "./token";
import axios from "axios";



export const Authcontext=createContext(null)

export const Authprovider=({children}:{children:React.ReactNode})=>{
    const[loading,setloading]=useState(true)
    const[isAuth,setisAuth]=useState<boolean>(false)

    useEffect(()=>{
        const checkusersession=async()=>{
            try{
            const res=await axios.post("http://localhost:4000/apis/refresh",{},{withCredentials:true})
            setaccess(res.data.access)
            setisAuth(true)
        }catch(err){
            clearaccess()
            setisAuth(false)
        }finally{
            setloading(false)
        }
    }

    checkusersession()
    },[])

    if(loading){
        return <h1>Loading.........</h1>
    }



    return(
    <Authcontext.Provider value={{isAuth,setisAuth}}>{children}</Authcontext.Provider>
    )
}