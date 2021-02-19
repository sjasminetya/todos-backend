const { response, reject } = require('../helpers/helpers')
const { addTask, update, deleteTask } = require('../models/task')
const { v4: uuidv4 } = require('uuid')

exports.addTask = async (req, res) => {
    const { labelId, task } = req.body
    const id = uuidv4()
    const userId = req.id

    const data = {
        id,
        userId,
        labelId,
        task,
        completed: 2,
        created_at: new Date(),
        update_at: new Date()
    }

    await addTask(data)
    try {
        return response(res, { message: 'Success add task' }, 200, null)
    } catch (error) {
        console.log(error)
    }
}

exports.update = async (req, res) => {
    const id = req.params.id
    const { task, completed } = req.body
    const data = {}

    if (task) { data.task = task }
    if (completed) { data.completed = completed }

    const result = await update(data, id)
    try {
        if (result.length === 0) {
            return reject(res, null, 400, { error: 'cant update task' })
        }
        return response(res, { message: 'Success update task' }, 200, null)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteTask = async (req, res) => {
    const id = req.params.id

    const result = await deleteTask(id)
    try {
        if (result.length === 0) {
            return reject(res, null, 400, {error: 'id not found'})
        }
        return response(res, {message: 'success delete task'}, 200, null)
    } catch (error) {
        console.log(error)
    }
}