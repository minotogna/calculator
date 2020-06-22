const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')

const app = express()

app.use(morgan('common'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', express.static(path.resolve(__dirname, '..', 'dist')))
app.use('/favicon.ico', express.static(path.resolve(__dirname, '..', 'public/favicon.ico')))

module.exports = app
