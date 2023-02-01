import mongoose from "mongoose";

const URI = "mongodb://0.0.0.0:27017/BootCampPractice";


 export const dbConfig = async() =>{
  try {
    const connect = await mongoose.connect(URI)
    console.log(`db is connected to port : ${connect.connection.host}`)

  } catch (error) {
   console.log(`unable to connect to database`) 
  }
}

