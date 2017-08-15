var express = require('express')
var router = express.Router()

var greetingsDb = require('../db/greeting')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  greetingsDb.getGreetings(db)
    .then(greetings => {
      res.json(greetings)
    })
})


router.post('/', (req,res) => {
  var data = req.body
  console.log("Api hit here is your data =>", data );
  var db = req.app.get('db')
  db("greetings").insert(data)
  .then(response => {
    console.log("then Api",response);
    res.json(response)
  })
})


module.exports = router
