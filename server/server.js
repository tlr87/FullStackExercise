var path = require('path')
var express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
var cors = require('cors')



var UsersApiRoutes = require('./routes/auth')
var dataApiRoutes = require('./routes/DataApi')

var server = express()
server.use(passport.initialize())

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1/api', dataApiRoutes)
server.use('/api/v1/auth', UsersApiRoutes)



module.exports = function(db) {
  server.set('db', db)
  return server
}
