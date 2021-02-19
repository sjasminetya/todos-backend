const express = require('express')
const router = express.Router()
const {login, register, update, getUserById, getAllUser, deleteUser, addUser} = require('../controllers/users')
const {verifyAccess} = require('../middleware/auth')
const {verfyAdmin} = require('../middleware/admin')

router
    .post('/login', login)
    .post('/register', register)
    .post('/admin/add-user', verifyAccess, verfyAdmin, addUser)
    .patch('/:id', verifyAccess, verfyAdmin, update)
    .get('/:id', verifyAccess, getUserById)
    .get('/', getAllUser)
    .delete('/:id', verifyAccess, verfyAdmin, deleteUser)

module.exports = router