const express = require("express");
const { createOrder, getOrder, cancelOrder, feedbackOrder } = require("../controllers/Order");
const { currentUser } = require("../middlewares/currentUser.js");
const Router = express.Router();
Router.route("/").get(currentUser, getOrder).post(currentUser, createOrder);
Router.route("/:id").patch(currentUser, cancelOrder).put(currentUser, feedbackOrder);
module.exports = Router;
