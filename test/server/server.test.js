var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')
var Gate = require('../../server/db/dbGate')
var setupDb = require('./setup-db')

setupDb(test,createServer)

test.cb('GET /', t => {
  request(t.context.app)
    .get('/v1/api/')
    .expect(200)
    .end((err,res) => {
      if (err) console.log(err);
      t.is(res.body.length, 3)
      t.end()
    })
})


test.cb('read db', t => {
  Gate.getData(t.context.db)
    .then(test => {
      t.is(test.length, 3)
      t.true(test[0].hasOwnProperty('text'))
      t.end()
    })
})

test.cb('read db id', t => {
  Gate.getData(t.context.db)
    .then(test => {
      t.is(test.length, 3)
      t.is(test[0].id,1)
      t.end()
    })
})
