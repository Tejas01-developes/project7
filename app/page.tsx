"use client"

import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { setaccess } from './lib/token';
import { useRouter } from 'next/navigation';
import { Authcontext } from './lib/Authcontext';

interface datatype{
  email:string,
  password:string
}

const page = () => {
const{setisAuth}=useContext(Authcontext)
const{register,handleSubmit,formState:{errors}}=useForm()
const routes=useRouter()

const login=async(data:datatype)=>{
  const res=await axios.post("http://localhost:4000/apis/login",data,{withCredentials:true})
  if(res.data.success){
    alert("Login succesfull")
    setaccess(res.data.access)
    setisAuth(true)
   return routes.replace("/home")
  }
  return alert("Login failed")
}

  return (
    <div>
      <form onSubmit={handleSubmit(login)}>
      <input type="text" placeholder='Email' {...register("email",{required:"Fill the email"})}/>
      {errors.email && (
        <p>{String(errors.email?.message)}</p>
      )}
      <input type="password" placeholder='Password'  {...register("password",{required:"Fill the password"})} />
   <button type='submit'>Login</button>
 
   </form>
    </div>
  )
}

export default page
