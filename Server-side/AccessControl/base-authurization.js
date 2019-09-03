const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config');
const { users } = require('../Database/users');



const isTokenExist = async (res, next, token) => {
    const user = jwt.verify(token, secretKey);
    const userData = await users.findOne({ _id: user.userId })
    if (userData._id.toString() === user.userId) {
        return next();
    }
    res.sendStatus(401);
    return;
}

const isAuthurized = (req, res, next) => {
    const token = req.get('Authorization').split(' ');
    if (token[0] !== 'Bearer') {
        res.sendStatus(401);
        return
    }
    return isTokenExist(res, next, token[1])

}



module.exports = {
    isAuthurized
}