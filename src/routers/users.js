const { response } = require('express')
const express = require('express')
const router = express.Router()
const {login, register, update} = require('../controllers/users')
const {verifyAccess} = require('../middleware/auth')
const {verfyAdmin} = require('../middleware/admin')

router
    .post('/login', login)
    .post('/register', register)
    .patch('/:id', verifyAccess, verfyAdmin, update)

module.exports = router