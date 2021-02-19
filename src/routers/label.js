const express = require('express')
const router = express.Router()
const {addLabel, getAllLabel} = require('../controllers/label')
const {verifyAccess} = require('../middleware/auth')
const {verfyAdmin} = require('../middleware/admin')

router
    .post('/admin/add-label', verifyAccess, verfyAdmin, addLabel)
    .get('/', verifyAccess, getAllLabel)

module.exports = router