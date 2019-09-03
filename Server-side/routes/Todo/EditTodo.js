const { todoList } = require('../../Database/todo');


module.exports = Update = (req, res) => {
    const { todo, date, time } = req.body;
    const { taskId } = req.params;
    const bodyKeys = Object.keys(req.body);
    const updateTask = editAndValidate(req.body, bodyKeys);
    if (Object.keys(updateTask).length) {
        todoList.findByIdAndUpdate({ _id: taskId }, { $set: { ...updateTask } }, (err, data) => {
            if (err) {
                console.log(err)
                res.sendStatus(500);
                return;
            }
            res.send({
                message: "has been updated succssesfully"
            })
        })
    }
    else {
        res.send({
            message: "Nothing updated beacuse there is no content"
        })
    }
}




const editAndValidate = (obj, arr) => {
    let res = {};
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        if (obj[elem] && obj[elem] !== '' && !obj[elem].length) {
            res[elem] = obj[elem];
        }
        if (obj[elem] && obj[elem].length > 0) {
            res[elem] = obj[elem];
        }
    }
    return res;

}