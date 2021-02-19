const {query} = require('../helpers/query')

exports.addTask = (data) => {
    return query('INSERT INTO task SET ?', data)
}

exports.update = (data, id) => {
    return query('UPDATE task SET ? WHERE id = ?', [data, id])
}

exports.deleteTask = (id) => {
    return query('DELETE FROM task WHERE id = ?', id)
}