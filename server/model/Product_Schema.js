import mongoose from "mongoose";

const ProductDetaile = {
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
}

const ProductSchema = new mongoose.Schema(ProductDetaile);
const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;
