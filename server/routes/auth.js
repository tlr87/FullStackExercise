const jwt = require('jsonwebtoken')
const passport = require('passport')

const crypto = require('../lib/crypto')

// server/routes/auth.js
const express = require('express')

const router = express.Router()

const db = require('../db/users')

router.post('/register', register)


function register (req, res) {
  console.log(req.body.username)
  db.userExists(req.body.username, req.app.get('db'))
    .then(exists => {
      if (exists) {
        return res.status(400).send({ message: 'User exists' })
      }
      db.createUser(req.body.username, req.body.password, req.app.get('db'))
        .then(() => res.status(201).end())
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}





function issueJwt (req, res, next) {
  passport.authenticate(
    'local',
    (err, user, info) => {
      if (err) {
        return res.status(500).json({
          message: 'Authentication failed due to a server error.'
        })
      }

      if (!user) {
        return res.status(403).json({
          message: 'Authentication failed.',
          info: info.message
        })
      }

      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    }
  )(req, res, next)
}



module.exports = router
