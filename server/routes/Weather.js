var express = require('express')
var router = express.Router()

var request = require('superagent')

router.get('/', (req, res) => {
  var url ="http://openweathermap.org/data/2.5/"

request
  .get(url + 'weather')
  .query({id:'2179537', appid: "b1b15e88fa797225412429c1c50c122a1"})
  .end((err, response) => {
      res.send(response.body)
    })
})

module.exports = router
