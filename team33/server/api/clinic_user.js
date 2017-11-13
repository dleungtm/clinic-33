import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET users listing. */
router.get('/users', function (req, res, next) {
  const query = 'SELECT * FROM clinic_user;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT
    })
    .then(users => {
      console.log(users)
      res.json(users)
    })
})

/* GET user by ID. */
router.get('/users/:user_id', function (req, res, next) {
  const user_id = req.params.user_id
  const query = 'SELECT * FROM clinic_user WHERE user_id = :user_id;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        user_id: user_id
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
  const first_name = req.body.data.first_name
  const last_name = req.body.data.last_name
  const phone_number = req.body.data.phone_number
  const address = req.body.data.address
  const username = req.body.data.username
  const password = req.body.data.password
  const is_active = req.body.data.is_active

  const query = 'UPDATE clinic_user SET first_name = :first_name, last_name = :last_name, phone_number = :phone_number, address = :address, password = :password, is_active = :is_active WHERE user_id = :user_id AND username = :username;'
  connection.query(query,
    {
      type: connection.QueryTypes.UPDATE,
      replacements: {
        user_id: user_id,
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        address: address,
        username: username,
        password: password,
        is_active: is_active
      }
    })
    .then(result => {
      // result[1] is the number of rows changed
      res.send('/users')
    })
})

router.post('/users/add', bodyParser.json(), function (req, res, next) {
  const user_id = req.body.data.user_id
  const first_name = req.body.data.first_name
  const last_name = req.body.data.last_name
  const phone_number = req.body.data.phone_number
  const address = req.body.data.address
  const username = req.body.data.username
  const password = req.body.data.password
  const is_active = req.body.data.is_active

  const query = 'INSERT INTO clinic_user (user_id, first_name, last_name, phone_number, address, username, password, is_active) VALUES (:user_id, :first_name, :last_name, :phone_number, :address, :username, :password, :is_active) ;'
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        user_id: user_id,
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        address: address,
        username: username,
        password: password,
        is_active: is_active
      }
    })
    .then(result => {
      res.send('/users')
    })
})

export default router
