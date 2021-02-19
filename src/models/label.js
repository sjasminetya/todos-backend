const {query} = require('../helpers/query')

exports.addLabel = (data) => {
    return query('INSERT INTO label SET ?', data)
}

exports.checkLabel = (label) => {
    return query('SELECT * FROM label WHERE label = ?', label)
}

exports.getAllLabel = () => {
    return query('SELECT * FROM label')
}