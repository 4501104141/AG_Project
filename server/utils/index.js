const jwt = require("jsonwebtoken");
exports.signTokenNoExpired = (data) => {
    return jwt.sign(
        {
            data,
        },
        process.env.APP_KEY_SECRET
    );
};
exports.userDataResponse = (user) => {
    let data = {};
    data.user = {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        addresses: user.addresses
    };
    data.token = this.signTokenNoExpired(user._id);
    return data;
};
