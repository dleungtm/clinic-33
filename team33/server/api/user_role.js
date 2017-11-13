import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* Get a user role by user_id and role_id? */
router.get('/user_roles/:user_id/:role_id', function (req, res, next) {
  const user_id = req.params.user_id
  const role_id = req.params.role_id

  const query = 'SELECT * FROM user_roles WHERE user_id = :user_id AND role_id = :role_id ;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        user_id: user_id,
        role_id: role_id
      }
    })
    .then(user => {
      if (user.length === 1 ){
        res.json(user[0])
      } else {
        res.status(404).json({})
      }
    })
})

/* add to the user_role table a user_id's role */
router.post('/user_roles/add', bodyParser.json(), function (req, res, next) {
  const user_id = req.body.data.user_id
  const role_id = req.body.data.role_id

  const query = 'INSERT INTO user_roles (user_id, role_id) values (:user_id, :role_id);'
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        user_id: user_id,
        role_id: role_id
      }
    })
    .then(result => {
      res.send('/user_roles')
    })
})

/* update a user_id's role */
router.post('/user_roles/update', bodyParser.json(), function (req, res, next) {
  const user_id = req.body.data.user_id
  const role_id = req.body.data.role_id

  const query = 'UPDATE user_roles SET role_id = :role_id WHERE user_id = :user_id;'
  connection.query(query,
    {
      type: connection.QueryTypes.UPDATE,
      replacements: {
        user_id: user_id,
        role_id: role_id
      }
    })
    .then(result => {
      res.send('/user_roles')
    })
})

export default router
