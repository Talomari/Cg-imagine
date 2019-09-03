const { todoList } = require('../../Database/todo');

module.exports = CompletedTask = (req, res) => {
    const { taskId } = req.params

    todoList.findOneAndUpdate({ _id: taskId }, { $set: req.body }, (err, data) => {
        if (err) {
            console.log(err)
            res.sendStatus(500);
            return;
        }
        res.sendStatus(200)

    })

}