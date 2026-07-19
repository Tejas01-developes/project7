"use client"

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { getaccess } from "./token";
import { setContext } from "@apollo/client/link/context";

const httplink=new HttpLink({
    uri:"http://localhost:4000/graphql"
})

const authlink=setContext((_,{headers})=>{
    const token=getaccess()
    console.log("Apollo is trying to send the token",token)
    return{
        headers:{
            ...headers,
            authorization:token ? `Bearer ${token}` : ""
        }
    }
})



const client=new ApolloClient({
    link:authlink.concat(httplink),
    cache:new InMemoryCache()
})

export const Apollowrapper=({children}:{children:React.ReactNode})=>{
    return(
        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
}
