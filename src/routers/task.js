const express = require('express')
const router = express.Router()
const {addTask, update, deleteTask, getTaskById} = require('../controllers/task')
const {verifyAccess} = require('../middleware/auth')

router
    .get('/:id', verifyAccess, getTaskById)
    .post('/add-task', verifyAccess, addTask)
    .patch('/:id', verifyAccess, update)
    .delete('/:id', verifyAccess, deleteTask)

module.exports = router