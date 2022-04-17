const mongoose = require("mongoose");
const { Schema } = mongoose;
const orderSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        products: [{
            _id: { type: Schema.Types.ObjectId, ref: "Product" },
            option: {
                milk: { type: Number, max: 100, min: 0, default: 100 },
                sweetness: {
                    type: Number, max: 100, min: 0, default: 100
                },
                size: { type: String, enum: ["S", "M", "L"], default: "S" },
                amount: { type: Number, default: 1 },
            },
            price: { type: Number, default: 0 },
        }],
        status: {
            type: String,
            default: "Processing",
            enum: ["Processing", "Ready", "Shipping", "Delivered", "Cancelled"]
        },
        method: {
            type: String,
            enum: ["Pick up", "Delivery"]
        },
        time: {
            type: Date,
            default: Date.now()
        },
        address: {
            name: { type: String },
            phone: { type: String },
            address: { type: String },
        },
        paymentMethod: {
            type: String,
            default: "Cash on Delivery",
            enum: ["Cash on Delivery", "Paypal"]
        },
        shippingFee: { type: Number, default: 0 },
        coupon: { type: Schema.Types.ObjectId, ref: "Coupon" },
        totalBefore: { type: Number, default: 0 },
        discount: { type: Number, default: 0 },
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
