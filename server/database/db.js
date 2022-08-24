import mongoose from "mongoose";

const Connection = (user, pass) => {
    const URL = `mongodb+srv://${user}:${pass}@ecommerswebsite.u4vduju.mongodb.net/?retryWrites=true&w=majority`
    try {
        mongoose.connect(URL)
        console.log("database connected sucessfully ")
    } catch (error) {
        console.log(`erro while connecting database is ${error.message}`)
    }
}

export default Connection;