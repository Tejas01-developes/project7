import mongoose from "mongoose";

const friendschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },

    age:{
        type:String,
        required:true
    }

})

export const friendscollection=mongoose.model("friends",friendschema)
