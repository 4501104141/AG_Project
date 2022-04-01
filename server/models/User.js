const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        avatar: { type: String },
        addresses: [
            {
                name: { type: String },
                phone: { type: String },
                address: { type: String },
                isDefault: { type: Boolean, default: false },
            }
        ],
        active: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        strict: true,
    }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);
User.createIndexes();
module.exports = User;
