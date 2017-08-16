var express = require('express')
var router = express.Router()

var Gate = require('../db/dbGate')

// get

router.get('/', (req,res) =>{
  var db = req.app.get('db')
  Gate.getData(db)
  .then(dataRows => {
    res.json(dataRows)
  })
})


// Post

router.post('/', (req,res) =>{
  var db = req.app.get('db')
  var {number, otherText, text} = req.body
  const data = {text, number}
  const addToData = {otherText}
  console.log("Api hit here is your data =>", data )
  db("AddToDataTable").insert(addToData)
  .then(response =>{
  data.foreign_id=response[0]
   db("DataTable").insert(data)
    .then((response) => {
      console.log("then Api",response);
      res.json(response)
    })
  })
})

// Delete

router.delete('/:id', (req, res) => {
  var db = req.app.get('db')
    db("DataTable")
    .where("id",req.params.id)
    .delete()
    .then(() => {
      res.sendStatus(204)
    })
    .catch(err => {
      res.sendStatus(500).send(err + ' SERVER ERROR')
    })
})

//Put
router.put('/:id', (req, res) => {
  var db = req.app.get('db')
    db("DataTable")
    .where("id",req.params.id)
    .update(req.body)
    .then(() => {
      res.sendStatus(204)
    })
    .catch(err => {
      res.sendStatus(500).send(err + ' SERVER ERROR')
    })
})




module.exports = router
