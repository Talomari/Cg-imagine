const { todoList } = require('../../Database/todo');

module.exports = FetchCompletedTask = (req, res) => {

    todoList.find({ isDeleted: false, isCompleted: true }, (err, data) => {
        if (err) {
            console.log(err)
            res.sendStatus(500);
            return;
        }
        res.send(data)

    })

}