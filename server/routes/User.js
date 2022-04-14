const express = require("express");
const { loginGoogle, getCurrentUser, updateUser } = require("../controllers/User");
const { currentUser } = require("../middlewares/currentUser.js");
const Router = express.Router();
Router.route("/loginGoogle").post(loginGoogle);
Router.route("/").get(currentUser, getCurrentUser).patch(currentUser, updateUser);
module.exports = Router;
