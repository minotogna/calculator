const { Router } = require('express')
const calculatorApi = require('./calculator/api')

const apiRouter = Router()
calculatorApi.init(apiRouter)

module.exports = apiRouter
