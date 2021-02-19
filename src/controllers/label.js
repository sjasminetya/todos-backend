const { response, reject } = require('../helpers/helpers')
const { addLabel, checkLabel, getAllLabel, getLabelById, update, deleteLabel, getTaskByLabel } = require('../models/label')
const { v4: uuidv4 } = require('uuid')

exports.addLabel = async (req, res) => {
    const { label, desc } = req.body
    const id = uuidv4()

    const data = {
        id,
        label,
        desc,
        created_at: new Date(),
        update_at: new Date()
    }

    const resultCheck = await checkLabel(label)
    if (resultCheck.length > 0) return reject(res, null, 400, { error: 'Label already exists' })

    await addLabel(data)
    try {
        return response(res, { message: 'Success add label' }, 200, null)
    } catch (error) {
        console.log(error)
    }
}

exports.getAllLabel = async (req, res) => {
    const result = await getAllLabel()
    try {
        if (result.length === 0) {
            return reject(res, null, 400, { error: 'label not found' })
        }
        return response(res, result, 200, null)
    } catch (error) {
        console.log(error)
    }
}

exports.getLabelById = async (req, res) => {
    const id = req.params.id

    const result = await getLabelById(id)
    try {
        if (result.length === 0) {
            return reject(res, null, 400, { error: 'id not found' })
        }
        return response(res, result, 200, null)
    } catch (error) {
        console.log(error)
    }
}

exports.getTaskByLabel = async (req, res) => {
    const id = req.params.id

    const result = await getTaskByLabel(id)
    try {
        if (result.length === 0) {
            return reject(res, null, 400, { error: 'label not found' })
        }
        return response(res, result, 200, null)
    } catch (error) {
        console.log(error)
    }
}

exports.update = async (req, res) => {
    const id = req.params.id
    const { label, desc } = req.body
    const data = {}

    if (label) { data.label = label }
    if (desc) { data.desc = desc }

    const result = await update(data, id)
    try {
        if (result.length === 0) {
            return reject(res, null, 400, { error: 'cant update label' })
        }
        return response(res, { message: 'Success update label' }, 200, null)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteLabel = async (req, res) => {
    const id = req.params.id

    const result = await deleteLabel(id)
    try {
        if (result.length === 0) {
            return reject(res, null, 400, {error: 'id not found'})
        }
        return response(res, {message: 'success delete label'}, 200, null)
    } catch (error) {
        console.log(error)
    }
}