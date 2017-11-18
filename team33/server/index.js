import express from 'express'
import { Nuxt, Builder } from 'nuxt'

import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Body parser to access 'req.body'
let bodyParser = require('body-parser')
app.use(bodyParser.json())

// Sessions to create 'req.session'
let session = require('express-session')
app.use(session({
  secret: 'team33',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))

// Initialize connection to database
var connection = require('./configs/sequelize.js')

// POST `/api/login` to log in the user and add user to the `req.session.authUser`
app.post('/api/login', function (req, res) {
  const username = req.body.username
  const password = req.body.password

  const query = `SELECT user_id, username, (first_name || ' ' || last_name) as full_name
                  FROM clinic_user
                  WHERE username = :username AND password = :password;`

  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        username: username,
        password: password
      }
    })
    .then(user => {
      if (user[0]) {
        req.session.authUser = user[0]
        return res.json(user[0])
      } else {
        res.status(401).json({ err: 'Invalid username/password.' })
      }
    })
    .catch(err => {
      res.status(401).json({ err })
    })
})

// POST `/api/logout` to log out the user and remove it from the `req.session` and clear role flags
app.post('/api/logout', function (req, res) {
  delete req.session.authUser
  req.session.isAdmin = false
  req.session.isClinician = false
  req.session.isReceptionist = false
  req.session.isPharmacist = false
  req.session.isPatient = false
  res.json({ ok: true })
})

// Import API Routes
app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
