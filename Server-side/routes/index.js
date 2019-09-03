const express = require('express');
const router = express.Router();
const auth = require('./Auth');
const todo= require('./Todo');

router.use('/auth', auth);
router.use('/todo',todo)
module.exports=router;