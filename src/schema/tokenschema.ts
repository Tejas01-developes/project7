import mongoose from "mongoose";

const tokenschema=new mongoose.Schema({
    token_id:{
        type:String,
        required:true,
        unique:true
    },

    userid:{
        type:String,
        required:true,
        unique:true
    },

    token:{
        type:String,
        required:true,
        unique:true
    },
    added_at:{
        type:Date,
        default:Date.now()
    },

    expired_at:{
        type:Date,
        require:true
    }
})

export const tokencollection=mongoose.model("tokens",tokenschema)