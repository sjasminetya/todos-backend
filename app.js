require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT

const routerUser = require('./src/routers/users')

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', routerUser)

app.listen(port, () => console.log(`server running in port ${port}`))