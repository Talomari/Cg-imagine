const { users } = require('../../Database/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../../config/config');

module.exports = signUp = (req, res) => {
    const { userName, email, password } = req.body;
    users.find({ email }, (err, response) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
            return
        }
        if (response.length > 0) {
            res.send({
                message: 'user already exist',
                status: 209
            }).status(209)
        }
        else {
            bcrypt.genSalt((err, salt) => {
                if (err) {
                    console.log(err)
                    res.sendStatus(500)
                    return
                }
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) {
                        console.log(err)
                        res.sendStatus(500)
                        return
                    }
                    const user = new users({
                        email,
                        password: hash,
                        userName
                    })
                    user.save((err, data) => {
                        if (err) {
                            console.log(err)
                            res.sendStatus(500)
                            return
                        }
                        const token = jwt.sign({ userId: data._id }, secretKey);
                        res.send({
                            status: 201,
                            token,
                            user: data,
                            message: 'Signed up successfully'
                        })

                    })
                })
            })
        }
    })
}