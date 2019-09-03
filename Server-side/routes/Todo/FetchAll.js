const { todoList } = require('../../Database/todo');

module.exports = FetchAll = (req, res) => {

    todoList.find({ isDeleted: false }, (err, data) => {
        if (err) {
            console.log(err)
            res.sendStatus(500);
            return;
        }
       res.send(data)

    })

}