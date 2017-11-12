import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET users listing. */
router.get('/users', function (req, res, next) {
  const query = 'SELECT * FROM clinic_user;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(users => {
      console.log(users)
      res.json(users)
    })
})

/* GET user by ID. */
router.get('/users/:username', function (req, res, next) {
  const username = req.params.username
  const query = 'SELECT * FROM clinic_user WHERE username = :username ;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        username: username
      }
    })
    .then(user => {
      if (user.length === 1 ) {
        res.json(user[0])
      } else {
        res.status(404).json({})
      }
    })
})

router.post('/users/update', bodyParser.json(), function (req, res, next) {
  const user_id = req.body.data.user_id
  const username = req.body.data.username
  const password = req.body.data.password

  const query = 'UPDATE clinic_user SET username = :username, password = :password WHERE user_id = :user_id ;'
  connection.query(query,
    {
      type: connection.QueryTypes.UPDATE,
      replacements: {
        username: username,
        password: password,
        user_id: user_id
      }
    })
    .then(result => {
      // result[1] is the number of rows changed
      res.send('/users')
    })
})

router.post('/users/add', bodyParser.json(), function (req, res, next) {
  const user_id = req.body.data.user_id
  const username = req.body.data.username
  const password = req.body.data.password

  const query = 'INSERT INTO clinic_user (username, password) VALUES (:username, :password) ;'
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        username: username,
        password: password
      }
    })
    .then(result => {
      // result[1] is the number of rows changed
      res.send('/users')
    })
})

export default router
