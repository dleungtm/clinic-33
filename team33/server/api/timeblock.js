import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET timeblocks list. */
router.get('/timeblocks', function (req, res, next) {
  const query = 'SELECT * FROM timeblock;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(users => {
      console.log(users)
      res.json(users)
    })
})

/* GET timeblock by ID. */
router.get('/timeblocks/:id', function (req, res, next) {
  const timeblock_id = req.params.timeblock_id
  const query = 'SELECT * FROM timeblock WHERE timeblock_id = :timeblock_id ;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        timeblock_id: timeblock_id
      }
    })
    .then(timeblock => {
      if (timeblock.length === 1 ) {
        res.json(timeblock[0])
      } else {
        res.status(404).json({})
      }
    })
})

router.post('/timeblocks/update', bodyParser.json(), function (req, res, next) {
  const user_id = req.body.data.user_id
  const username = req.body.data.username
  const password = req.body.data.password

  const query = 'UPDATE timeblock SET username = :username, password = :password WHERE user_id = :user_id ;'
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

router.post('/timeblocks/add', bodyParser.json(), function (req, res, next) {
  const timeblock_id = req.body.data.user_id
  const start_time = req.body.data.username
  const end_time = req.body.data.password

  const query = 'INSERT INTO timeblock (timeblock_id, start_time, end_time) VALUES (:timeblock_id, :start_time, :end_time) ;'
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        timeblock_id: timeblock_id,
        start_time: start_time,
        end_time: end_time
      }
    })
    .then(result => {
      // result[1] is the number of rows changed
      res.send('/timeblocks')
    })
})

export default router
