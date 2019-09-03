const { todoList } = require('../../Database/todo');

module.exports = Delete = (req, res) => {
    const { deletedId } = req.params

    todoList.findOneAndUpdate({ _id: deletedId }, { $set: { isDeleted: true } }, (err, data) => {
        if (err) {
            console.log(err)
            res.sendStatus(500);
            return;
        }
        res.send({
            message: "has been deleted succssesfully"
        })

    })

}