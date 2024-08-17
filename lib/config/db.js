import mongoose from "mongoose"

export const ConnectDB = async ()=>{
    await mongoose.connect("mongodb+srv://nextjstodo:nextjstodo@nextjstodo.i5xkh.mongodb.net/nextjstodo?retryWrites=true&w=majority&appName=nextjstodo")
console.log("connected");


}