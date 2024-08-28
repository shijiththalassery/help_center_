const express = require('express')
const routes = express()
const controller = require('../controller/controller')

routes.post('/check',controller.check)

routes.get('/cards',controller.getCards);
routes.get('/cards/:title',controller.searchCard)
routes.post('/cards',controller.submitCards)


module.exports = routes