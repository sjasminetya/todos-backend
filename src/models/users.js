const {query} = require('../helpers/query')

exports.register = (data) => {
    return query('INSERT INTO users SET ?', data)
}

exports.update = (data, id) => {
    return query('UPDATE users SET ? WHERE id = ?', [data, id])
}

exports.addUser = (data) => {
    return query('INSERT INTO users SET ?', data)
}

exports.checkUsername = (username) => {
    return query('SELECT * FROM users WHERE username = ?', username)
}

exports.getAllUser = () => {
    return query('SELECT * FROM users')
}

exports.getUserById = (id) => {
    return query('SELECT * FROM users WHERE id = ?', id)
}

exports.getTaskByIdUser = (id) => {
    return query('SELECT users.id, users.username, task.* FROM users INNER JOIN task ON users.id = task.userId WHERE users.id = ?', id)
}

exports.deleteUser = (id) => {
    return query('DELETE FROM users WHERE id = ?', id)
}