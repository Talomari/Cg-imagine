const express = require('express');
const router = express.Router();
const { isAuthurized } = require('../../AccessControl/base-authurization')
const AddTask = require('./AddTodo');
const UpdateTask = require('./EditTodo');
const DeleteTask = require('./DeletTodo');
const FetchAll = require('./FetchAll');
const FetchCompleted = require('./FetchIsCompleted');
const FetchNotCompleted = require('./FetchIsNotCompleted');
const IsCompletedTask = require('./IsCompletedTask');

router.post('/add/:userId', isAuthurized, AddTask);
router.post('/update/:taskId', isAuthurized, UpdateTask);
router.get('/delete/:deletedId', isAuthurized, DeleteTask);
router.get('/all/:userId', isAuthurized, FetchAll);
router.get('/fetch/completed/:userId', isAuthurized, FetchCompleted);
router.get('/fetch/notcompleted/:userId', isAuthurized, FetchNotCompleted);
router.post('/iscompleted/:taskId', isAuthurized, IsCompletedTask);


module.exports = router;