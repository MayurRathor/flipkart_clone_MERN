
import ProductModel from './model/Product_Schema.js'
import { products } from './constant/data.js'

const insertDefaultData = async () => {
    try {
        await ProductModel.insertMany(products)
        console.log('default data insert sucessfully')
    } catch (error) {
        console.log(`error whle inserting the default data ${error}`)
    }
}

export default insertDefaultData