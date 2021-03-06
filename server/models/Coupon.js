const mongoose = require("mongoose");
const { Schema } = mongoose;
const couponSchema = new Schema(
    {
        code: { type: String, required: true, unique: true },
        type: { type: String, required: true, enum: ["Percentage", "Fixed"] },
        value: { type: Number, required: true },
        count: { type: Number, default: 20 },
    },
    {
        timestamps: true,
        strict: true,
    }
);
const Coupon = mongoose.models.Coupon || mongoose.model("Coupon", couponSchema);
Coupon.createIndexes();
module.exports = Coupon;
