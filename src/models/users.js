const {query} = require('../helpers/query')

exports.register = (data) => {
    return query('INSERT INTO users SET ?', data)
}

exports.update = (data, id) => {
    return query('UPDATE users SET ? WHERE id = ?', [data, id])
}

exports.checkUsername = (username) => {
    return query('SELECT * FROM users WHERE username = ?', username)
}

exports.getUserById = (id) => {
    return query('SELECT * FROM users WHERE id = ?', id)
}

exports.deleteUser = (id) => {
    return query('DELETE FROM users WHERE id = ?', id)
}