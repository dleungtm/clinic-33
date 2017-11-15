import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET all users. */
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

/* GET all clinic staff. */
router.get('/users/staff', function (req, res, next) {
  const query = 'SELECT DISTINCT c.user_id, first_name, last_name FROM clinic_user c INNER JOIN user_role u ON u.user_id = c.user_id WHERE u.role_id IN (1, 2, 3, 4);'
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

/* GET 'all' patient information including health info by user_id */
router.get('/users/all_info/:user_id', function (req, res, next) {
  const user_id = req.params.user_id
  const query = `SELECT c.user_id, c.first_name, c.last_name, u.phn, u.dob, u.height, u.blood_type, u.sex
	                FROM clinic_user c
                  INNER JOIN user_health_info u ON c.user_id = u.user_id
                  WHERE c.user_id = :user_id;`

  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        user_id: user_id
      }
    })
    .then(info => {
      if (info.length === 1) {
        console.log(info[0])
        res.json(info[0])
      } else {
        res.status(404).json({})
      }
    })
})

export default router
