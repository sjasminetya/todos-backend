const {reject} = require('../helpers/helpers')

exports.verfyAdmin = (req, res, next) => {
    const role = req.role
    if (role === 1) {
        return next()
    } else {
        return reject(res, null, 401, {error: 'no access'})
    }
}