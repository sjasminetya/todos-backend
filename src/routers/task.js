const express = require('express')
const router = express.Router()
const {addTask, update, deleteTask} = require('../controllers/task')
const {verifyAccess} = require('../middleware/auth')

router
    .post('/add-task', verifyAccess, addTask)
    .patch('/:id', verifyAccess, update)
    .delete('/:id', verifyAccess, deleteTask)

module.exports = router