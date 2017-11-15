import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* Get list of all user roles */
router.get('/user_roles', function (req, res, next) {

  const query = 'SELECT c.user_id, first_name, last_name, role_name FROM clinic_user c LEFT JOIN user_role u ON u.user_id = c.user_id INNER JOIN role r ON r.role_id = u.role_id;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT
    })
    .then(result => {
      console.log(result)
      res.json(result)
    })
})

/* Get a user's role by user_id */
router.get('/user_roles/:user_id', function (req, res, next) {
  const user_id = req.params.user_id

  const query = 'SELECT role_id FROM user_role WHERE user_id = :user_id;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        user_id: user_id
      }
    })
    .then(roles => {
      console.log(roles)
      if (roles.length > 0) {
        res.json(roles)
      } else {
        res.status(404).json({})
      }
    })
})

/* add to the user_role table a user_id's role */
router.post('/user_roles/add', bodyParser.json(), function (req, res, next) {
  const user_id = req.body.data.user_id
  const role_id = req.body.data.role_id

  const query = 'INSERT INTO user_role (user_id, role_id) values (:user_id, :role_id);'
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        user_id: user_id,
        role_id: role_id
      }
    })
    .then(result => {
      res.send('/users/roles')
    })
    .catch((error) => {
      for (var i in error.errors) {
        console.log(error.errors[i])
        if (error.errors[i].type === 'unique violation') {
          console.log('Unique Constraint Violation - Insertion Failed.')
          res.json({'message': 'Unique Constraint Violation - Insertion Failed.'})
          return
        }
      }
    })
})

/* update a user_id's role */
router.post('/user_roles/update', bodyParser.json(), function (req, res, next) {
  const user_id = req.body.data.user_id
  const role_id = req.body.data.role_id

  const query = 'UPDATE user_role SET role_id = :role_id WHERE user_id = :user_id;'
  connection.query(query,
    {
      type: connection.QueryTypes.UPDATE,
      replacements: {
        user_id: user_id,
        role_id: role_id
      }
    })
    .then(result => {
      res.send('/users/roles')
    })
})

export default router
