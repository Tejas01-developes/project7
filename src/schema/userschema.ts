import mongoose from "mongoose";

const schema=new mongoose.Schema({

    userid:{
    type:String,
    required:true,
    unique:true
    },

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    }
})

export const usercollection=mongoose.model("user",schema)