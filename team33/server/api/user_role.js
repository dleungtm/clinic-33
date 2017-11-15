import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* Get list of all user roles */

// router.get('/user_roles')
// MOVED TO clinic_user.js AS GET ALL USERS

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
      if (roles.length > 0) {
        var roleIds = roles.map(function (obj) { return obj.role_id })
        req.session.roleIds = roleIds
        res.json(roleIds)
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
