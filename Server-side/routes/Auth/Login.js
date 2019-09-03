const { users } = require('../../Database/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../../config/config');

module.exports = Login = (req, res) => {
    const { email, password } = req.body;
    users.findOne({ email }, (err, response) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
            return
        }
        if (!response) {
            res.send({
                message: 'user dose not exist',

            })


        }
        else {
            bcrypt.compare(password, response.password, (err, match) => {
                if (err) {
                    console.log(err)
                    res.sendStatus(500)
                    return
                }
                if (match) {
                    const token = jwt.sign({ userId: response._id }, secretKey)
                    res.send({
                        status: 201,
                        token,
                        user: response,
                        message: 'Loggedin successfully'
                    })
                }
                else {
                    res.send({
                        message: 'password is wrong'
                    })
                }
            })
        }
    })
}