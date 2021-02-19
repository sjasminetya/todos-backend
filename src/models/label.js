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

exports.getTaskByLabel = (id) => {
    return query('SELECT label.*, task.* FROM label INNER JOIN task ON label.id = task.labelId WHERE label.id = ?', id)
}

exports.update = (data, id) => {
    return query('UPDATE label SET ? WHERE id = ?', [data, id])
}

exports.deleteLabel = (id) => {
    return query('DELETE FROM label WHERE id = ?', id)
}