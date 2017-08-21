// server/db/users.js
var connection = require('../../knexfile').development
const hash = require('../lib/crypto')


module.exports = {
  createUser,
  userExists
}

function createUser (username, password, conn) {
  const passwordHash = hash.generate(password)
  const db = conn || connection
  return db('users')
    .insert({username, hash: passwordHash})
}

function userExists (username, conn) {
  const db = conn || connection
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}
