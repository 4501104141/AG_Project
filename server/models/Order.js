const mongoose = require("mongoose");
const { Schema } = mongoose;
const orderSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        products: [{
            type: Schema.Types.ObjectId, ref: "Product", option: {
                sweetness: { type: String, enum: ["Sweet", "Sour", "Bitter"] },
                size: { type: String, enum: ["S", "M", "L"] },
                quantity: { type: Number, default: 1 },
                price: { type: Number, default: 0 },
            }
        }],
        status: {
            type: String,
            default: "Pending",
            enum: ["Pending", "Processing", "Ready", "Shipping", "Delivered", "Cancelled"]
        },
        method: {
            type: String,
            enum: ["Pick up", "Delivery"]
        },
        time: {
            type: Date,
            default: Date.now()
        },
        addresses: {
            name: { type: String },
            phone: { type: String },
            address: { type: String },
            isDefault: { type: Boolean, default: false },
        },
        payment: {
            method: {
                type: String,
                default: "Cash on Delivery",
                enum: ["Cash on Delivery", "Credit Card"]
            },
            status: {
                type: String,
                default: "Pending",
                enum: ["Pending", "Success", "Failed"]
            }
        },
        coupon: { type: Schema.Types.ObjectId, ref: "Coupon" },
        discount: { type: Number, default: 0 },
        totalBefore: { type: Number, default: 0 },
        shipping: { type: Number, default: 0 },
        totalAfter: { type: Number, default: 0 },
        note: { type: String },
        feedback: { type: String },
    },
    {
        timestamps: true,
        strict: true,
    }
);
const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
Order.createIndexes();
module.exports = Order;
