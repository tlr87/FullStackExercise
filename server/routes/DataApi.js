var express = require('express')
var router = express.Router()

var Gate = require('../db/dbGate')

router.get('/', (req,res) =>{
  let db = req.app.get('db')
  Gate.getData(db)
  .then(dataRows => {
    res.json(dataRows)
  })
})

router.post('/', (req,res) =>{
  var data = req.body
  console.log("Api hit here is your data =>", data )
  var db = req.app.get('db')
  db("DataTable").insert(data)
  .then(response =>{
    console.log("then Api",response);
    res.json(response)
  })
})



module.exports = router
