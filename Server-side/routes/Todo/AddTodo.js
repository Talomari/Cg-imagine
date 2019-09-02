const { todoList } = require('../../Database/todo');


module.exports = AddTask = (req, res) => {
    const { todo, date, time } = req.body;
    const { userId } = req.params;
    const saveTodo = new todoList({
        todo,
        date,
        time,
        userId
    })
    saveTodo.save((err, data) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
            return
        }
        res.send({
            message: 'has been saved succssesfully'
        })
    })
}