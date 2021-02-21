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

exports.getLabelById = (id) => {
    return query('SELECT * FROM label WHERE id = ?', id)
}

exports.getTaskByLabel = (userId) => {
    return query('SELECT label.id, task.*, users.id as userId, users.name FROM label INNER JOIN task ON label.id = task.labelId INNER JOIN users ON userId = task.userId WHERE userId = ?', userId)
}

exports.update = (data, id) => {
    return query('UPDATE label SET ? WHERE id = ?', [data, id])
}

exports.deleteLabel = (id) => {
    return query('DELETE FROM label WHERE id = ?', id)
}