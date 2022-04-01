const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        size: { type: String, required: true, enum: ["S", "M", "L"] },
    },
    {
        timestamps: true,
        strict: true,
    }
);
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
Product.createIndexes();
module.exports = Product;
