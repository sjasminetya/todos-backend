const {response, reject} = require('../helpers/helpers')
const {register, update, deleteUser, getUserById, checkUsername, getAllUser, addUser} = require('../models/users')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    const {username, password} = req.body

    const get = await checkUsername(username)
    try {
        const user = get[0]
        if (user !== undefined && user.length !== 0) {
            bcrypt.compare(password, user.password, function (err, resCheck) {
                if (!resCheck) return reject(res, null, 401, {error: 'Login failed, wrong password'})
                delete user.password
                delete user.created_at
                delete user.update_at

                jwt.sign({id: user.id, username: user.username, role: user.role}, process.env.SECRET_KEY, {expiresIn: '24h'}, function(err, token) {
                    user.token = token
                    return response(res, user, 200, null)
                })
            })
        } else {
            return reject(res, null, 401, {error: 'data not found'})
        }
    } catch (error) {
        console.log(error)
    }
}

exports.register = async (req, res) => {
    const {name, username, password} = req.body
    const id = uuidv4()

    const resultCheck = await checkUsername(username)
    if (resultCheck.length > 0) return reject(res, null, 400, {error: 'Username already exists'})

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            const data = {
                id,
                name,
                username,
                password: hash,
                role: 2,
                created_at: new Date(),
                update_at: new Date()
            }

            await register(data)
            try {
                return response(res, {message: 'Success register'}, 200, null)
            } catch (error) {
                console.log(error)
            }
        })
    })
}

exports.addUser = async (req, res) => {
    const {name, username, password} = req.body
    const id = uuidv4()

    const resultCheck = await checkUsername(username)
    if (resultCheck.length > 0) return reject(res, null, 400, {error: 'Username already exists'})

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            const data = {
                id,
                name,
                username,
                password: hash,
                role: 2,
                created_at: new Date(),
                update_at: new Date()
            }

            await addUser(data)
            try {
                return response(res, {message: 'Success add user'}, 200, null)
            } catch (error) {
                console.log(error)
            }
        })
    })
}

exports.update = async (req, res) => {
    const id = req.params.id
    const {name, username, password} = req.body
    const data = {}

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            if (name) {data.name = name}
            if (username) {data.username = username}
            if (password) {data.password = hash}

            const result = await update(data, id)
            try {
                if (result.length === 0) {
                    return reject(res, null, 400, {error: 'cant update data'})
                }
                return response(res, {message: 'Success update profile'}, 200, null)
            } catch (error) {
                console.log(error)
            }
        })
    })
}

exports.getUserById = async (req, res) => {
    const id = req.params.id

    const result = await getUserById(id)
    try {
        if (result.length === 0) {
            return reject(res, null, 400, {error: 'id not found'})
        }
        for(let key in result){
            if(result.hasOwnProperty(key)) {
              delete result[key].password
              delete result[key].created_at
              delete result[key].update_at
            }
        }
        return response(res, result, 200, null)
    } catch (error) {
        console.log(error)
    }
}

exports.getAllUser = async (req, res) => {
    const result = await getAllUser()
    try {
        if (result.length === 0) {
            return reject(res, null, 400, {error: 'data not found'})
        }
        for(let key in result){
            if(result.hasOwnProperty(key)) {
              delete result[key].password
              delete result[key].created_at
              delete result[key].update_at
            }
        }
        return response(res, result, 200, null)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id

    const result = await deleteUser(id)
    try {
        if (result.length === 0) {
            return reject(res, null, 400, {error: 'id not found'})
        }
        return response(res, {message: 'success delete user'}, 200, null)
    } catch (error) {
        console.log(error)
    }
}