const express = require('express');
const router = express.Router();
const AddTask = require('./AddTodo');

router.post('/add/:userId',AddTask);


module.exports=router;