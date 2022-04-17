const express = require("express");
const { createCoupon, getCoupon } = require("../controllers/Coupon");

const Router = express.Router();
Router.route("/").post(createCoupon);
Router.route("/:id").get(getCoupon);
module.exports = Router;
