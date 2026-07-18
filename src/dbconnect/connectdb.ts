import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config()



class db{
    private dburl:string
    constructor(){
        this.dburl=process.env.DB_URL as string
    }

    async connect(){
        try{
        await mongoose.connect(this.dburl)
      return  console.log("Database connected")
    }catch(err){
        console.log(err)
    }
}
}

export default new db()