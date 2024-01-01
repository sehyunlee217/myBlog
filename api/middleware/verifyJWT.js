const jwt = require('jsonwebtoken');

const verifyJWT = async (req, res, next) => {
    const cookies = req.cookies;

    if (!cookies) {
        return res.status(403);
    }
    else {
        jwt.verify(cookies.jwt,
            process.env.TOKEN_SECRET,
            (err, decoded) => {
                if (err) return res.status(403); // invalid token
            });
    }
    next();
};

module.exports = verifyJWT;