const jwt = require('jsonwebtoken');

const verifyJWT = async (req, res, next) => {
    const cookies = req.cookies.jwt;

    if (cookies == null) {
        return res.status(403).end(); // invalid token
    }
    jwt.verify(cookies,
        process.env.TOKEN_SECRET,
        (err, decoded) => {
            if (err) { // invalid token
                return res.status(403);
            }
            req.username = decoded.userInfo.username;
            next();
        });

};

module.exports = verifyJWT;