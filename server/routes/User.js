const express = require("express");
const { loginGoogle } = require("../controllers/User");
// const { currentUser } = require("../middlewares/currentUser");
const Router = express.Router();
// Control
Router.route("/loginGoogle").post(loginGoogle);
// Router.route("/").get(currentUser, getCurrentUser).post(verifyUser).put(currentUser, updateUser);
//Setting
module.exports = Router;
