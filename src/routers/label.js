const express = require('express')
const router = express.Router()
const {addLabel, getAllLabel, getLabelById, update, deleteLabel, getTaskByLabel} = require('../controllers/label')
const {verifyAccess} = require('../middleware/auth')
const {verfyAdmin} = require('../middleware/admin')

router
    .post('/admin/add-label', verifyAccess, verfyAdmin, addLabel)
    .get('/', verifyAccess, getAllLabel)
    .get('/:id', verifyAccess, getLabelById)
    .get('/task/:userId', verifyAccess, getTaskByLabel)
    .patch('/:id', verifyAccess, verfyAdmin, update)
    .delete('/:id', verifyAccess, verfyAdmin, deleteLabel)

module.exports = router