const { response, reject } = require('../helpers/helpers')
const { addLabel, checkLabel, getAllLabel } = require('../models/label')

exports.addLabel = async (req, res) => {
    const { label, desc } = req.body
    const id = uuidv4()

    const resultCheck = await checkLabel(label)
    if (resultCheck.length > 0) return reject(res, null, 400, { error: 'Label already exists' })

    const data = {
        id,
        label,
        desc,
        created_at: new Date(),
        update_at: new Date()
    }

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
            return reject(res, null, 400, {error: 'label not found'})
        }
        return response(res, result, 200, null)
    } catch (error) {
        console.log(error)
    }
}