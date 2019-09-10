const { todoList } = require('../../Database/todo');


module.exports = AddTask = (req, res) => {
    const { todo, date } = req.body;
    const { userId } = req.params;
    console.log(req.body)
    const saveTodo = new todoList({
       ...req.body,
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