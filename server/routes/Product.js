const express = require("express");
const { createProduct, updateProduct, getProducts, getProduct, deleteProduct } = require("../controllers/Product");
const Router = express.Router();
Router.route("/").get(getProducts).post(createProduct);
Router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);
module.exports = Router;
