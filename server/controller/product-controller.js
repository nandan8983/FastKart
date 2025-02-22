
import Product from "../model/product-schema.js"
export const getProducts = async (req, res) =>{
    try {
        const products = await Product.find({});
        res.send(products);
    } catch (error) {
        res.status(500).json({message: error.message });     
    }
}

export const getProduvctById = async (req, res) =>{
    try {
        let id = req.params.id;
        const product = await Product.findOne({'id': id});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message });     
    }
}