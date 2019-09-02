const { todoList } = require('../../Database/todo');

module.exports = FetchNotCompletedTask = (req, res) => {

    todoList.find({ isDeleted: false, isCompleted: false }, (err, data) => {
        if (err) {
            console.log(err)
            res.sendStatus(500);
            return;
        }
        res.send(data)

    })

}