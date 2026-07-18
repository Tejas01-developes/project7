"use client"
import React, { useContext, useEffect } from 'react'
import { getaccess } from '../lib/token'
import { Authcontext } from '../lib/Authcontext'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import api from '../lib/axios'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client/react'
import { addfriend } from '../lib/resolver'

interface addtype{
  name:string
  email:string
  age:string
}


const Home = () => {

  const routes=useRouter()
  const{isAuth}=useContext(Authcontext)
const{register,handleSubmit,formState:{errors}}=useForm<addtype>()
const[add]=useMutation(addfriend)

  useEffect(()=>{
    if(!isAuth){
      routes.replace("/")
    }
  },[isAuth,routes])

  if(!isAuth){
    return null
  }
const token=getaccess()

const addfrnd=async(data:addtype)=>{
const invite=await add({
  variables:{
    name:data.name,
    email:data.email,
    age:data.age
  }
})
if(invite.data){
return alert("user added")
}
}



  return (
    <div>
      <form onSubmit={handleSubmit(addfrnd)}>
     <input type="text" placeholder='Name' {...register("name",{required:"Name field is compulsary"})} />
     {errors.name && (
      <p>{String(errors.email?.message)}</p>
     )}
     <input type="text" placeholder='Email' {...register("email",{required:"Email is missing"})} />
     {errors.email && (
      <p>{String(errors.email.message)}</p>
     )}
     <input type="text" placeholder='Age' {...register("age",{required:"Fill the age"})} />
     {errors.age && (
      <p>{String(errors.age.message)}</p>
     )}
     <button type='submit'>Add</button>
     </form>
    </div>
  )
}

export default Home
