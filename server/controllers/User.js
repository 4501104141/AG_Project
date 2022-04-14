const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { google } = require("googleapis");
const { userDataResponse } = require("../utils");
const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET
);
exports.loginGoogle = async (req, res, next) => {
    try {
        const data = await oauth2Client.verifyIdToken({
            idToken: req.body.token,
        });
        const { email, name, picture, email_verified } = data.payload;
        if (!email_verified) {
            return res
                .status(401)
                .json({ message: "Your email is not verified" });
        }
        const user = await User.findOne({ email });
        if (user) {
            if (!user.active)
                return res.status(401).json({ message: "Account was banned" });
            res.status(200).json(userDataResponse(user));
        } else {
            let newUser = await User.create({
                email,
                name,
                avatar: picture,
            });
            res.status(200).json(userDataResponse(newUser));
        }
    } catch (error) {
        next(error);
    }
};
exports.getCurrentUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.user._id });
        if (user) {
            res.status(200).json(
                userDataResponse(user),
            );
        }
    } catch (error) {
        next(error);
    }
};
exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.user._id });
        if (user) {
            const { addresses } = req.body;
            user.addresses = addresses;
            await user.save();
            res.status(200).json(
                userDataResponse(user),
            );
        }
    } catch (error) {
        next(error);
    }
};