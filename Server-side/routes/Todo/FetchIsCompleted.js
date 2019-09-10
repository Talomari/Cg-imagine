const { todoList } = require('../../Database/todo');

module.exports = FetchCompletedTask = (req, res) => {
    const { userId } = req.params;
    todoList.find({userId, isDeleted: false, isCompleted: true }, (err, data) => {
        if (err) {
            console.log(err)
            res.sendStatus(500);
            return;
        }
        res.send(data)

    })

}