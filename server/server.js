var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var greetings = require('./routes/greeting')
var dataApiRoutes = require('./routes/DataApi')

var server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1/api', dataApiRoutes)
server.use('/api/greetings', greetings)

module.exports = function(db) {
  server.set('db', db)
  return server
}
