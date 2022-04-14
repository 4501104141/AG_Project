const Product = require("../models/Product");
exports.createProduct = async (req, res, next) => {
    try {
        const { name, description, price, image } = req.body;
        const product = await Product.create({
            name,
            description,
            price,
            image,
        });
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};
exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};
exports.getProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};
exports.updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, description, price, image } = req.body;
        const product = await Product.findByIdAndUpdate(id, {
            name,
            description,
            price,
            image,
        }, { new: true });
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};
exports.deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json({
            message: "Product deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};