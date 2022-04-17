const Coupon = require("../models/Coupon");
exports.createCoupon = async (req, res) => {
    try {
        const { code, type, value, count } = req.body;
        const coupon = await Coupon.create({
            code, type, value, count
        });
        res.status(201).json({
            message: "Coupon created successfully",
            coupon
        });
    } catch (err) {
        console.log(err);
    }
};
exports.getCoupon = async (req, res) => {
    try {
        const coupon = await Coupon.findOne({ code: req.params.id });
        if (coupon && coupon.count > 0) {
            res.status(200).json(
                coupon
            );
        }
        else {
            res.status(500).json({
                message: "Coupon not found"
            });
        }

    }
    catch (err) {
        console.log(err);
    }

};