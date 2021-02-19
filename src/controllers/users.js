const {response, reject} = require('../helpers/helpers')
const {register, update, deleteUser, getUserById, checkUsername} = require('../models/users')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    const {username, password} = req.body

    const get = await checkUsername(username)
    try {
        const user = get[0]
        console.log(user)
        if (user !== undefined && user.length !== 0) {
            bcrypt.compare(password, user.password, function (err, resCheck) {
                if (!resCheck) return reject(res, null, 401, {error: 'Login failed, wrong password'})
                delete user.password

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
    const {username, password} = req.body
    const id = uuidv4()

    const resultCheck = await checkUsername(username)
    if (resultCheck.length > 0) return reject(res, null, 400, {error: 'Username already exists'})

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            const data = {
                id,
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