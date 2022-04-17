const Order = require("../models/Order");
const Coupon = require("../models/Coupon");
const Product = require("../models/Product");
exports.createOrder = async (req, res) => {
    try {
        const id = req.user._id;
        const { products, time, address, method, paymentMethod, coupon
            , totalBefore, discount, totalAfter, note, shippingFee } = req.body;
        if (coupon) {
            const coupon1 = await Coupon.findOne({ _id: coupon });
            coupon1.count = coupon1.count - 1;
            await coupon1.save();
        }
        products.forEach(async (product) => {
            const product1 = await Product.findById(product._id);
            product1.purchases = product1.purchases + 1;
            await product1.save();
        }
        );
        const order = await Order.create({
            user: id,
            products,
            time,
            address, paymentMethod,
            method,
            coupon,
            totalBefore,
            discount,
            totalAfter,
            note,
            shippingFee
        });
        res.status(201).json({
            message: "Order created successfully",
            order
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getOrder = async (req, res) => {
    try {
        const id = req.user._id;
        const order = await Order.find({ user: id }).populate({
            path: "products",
            populate: {
                path: "_id",
                model: "Product"
            }
        }).sort({ createdAt: -1 });
        res.status(200).json({
            message: "Order fetched successfully",
            order
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.cancelOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }
        order.status = "Cancelled";
        await order.save();
        res.status(200).json({
            message: "Order cancelled successfully",
            order
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.feedbackOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }
        order.feedback = req.body.feedback;
        await order.save();
        res.status(200).json({
            message: "Order feedback successfully",
            order
        });
    }
    catch (error) {
        console.log(error);
    }
};