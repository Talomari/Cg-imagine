const { todoList } = require('../../Database/todo');

module.exports = FetchNotCompletedTask = (req, res) => {
    const { userId } = req.params;

    todoList.find({userId, isDeleted: false, isCompleted: false }, (err, data) => {
        if (err) {
            console.log(err)
            res.sendStatus(500);
            return;
        }
        res.send(data)

    })

}