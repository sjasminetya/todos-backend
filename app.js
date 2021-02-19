require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT

const routerUser = require('./src/routers/users')
const routerLabel = require('./src/routers/label')
const routerTask = require('./src/routers/task')

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', routerUser)
app.use('/label', routerLabel)
app.use('/task', routerTask)

app.listen(port, () => console.log(`server running in port ${port}`))