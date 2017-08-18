var express = require('express')
var router = express.Router()
var request = require('superagent')

router.get('/', (req, res) => {

  var url = "http://samples.openweathermap.org/data/2.5/"

  request
    .get(url + 'weather')
    .query({q: 'Wellington,nz', appid: "b1b15e88fa797225412429c1c50c122a1"})
    .end((err, response) => {
      res.send(response.body)
    })
})

module.exports = router
