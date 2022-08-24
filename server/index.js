import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv"
import insertDefaultData from './default.js'
import ProductModel from './model/Product_Schema.js'

dotenv.config()

const userName = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

const app = express();
const PORT = 8000;

app.listen(PORT, console.log(`server running on ${PORT} `))
Connection(userName, password)
insertDefaultData()


app.get('/', (req, res) => {
    ProductModel.find({}, (err, result) => {
        if (err) {
            console.log(res.json(err))
        } else {
            console.log(res.json(result))
        }
    });
})