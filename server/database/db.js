import mongoose from "mongoose";

export const Connection = async (username,password) => {

    const URL = `mongodb+srv://${username}:${password}@ecommerce-web.jays7xs.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true})
        console.log("DataBase Connected Sucessfully")
    } catch (error){
        console.log("Error while connecting with the database ",error.message);
    }
}

export default Connection;