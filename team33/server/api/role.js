import { Router } from 'express'
var connection = require('../configs/sequelize')

const router = Router()

/* Get all roles */
router.get('/roles', function (req, res, next) {
  const query = 'SELECT * FROM role;'
  connection.query(query, {type: connection.QueryTypes.SELECT})
    .then(roles => {
      res.json(roles)
    })
})

/* get a role */
// TODO: does alternate key play into this?
router.get('/roles/:id', function (req, res, next) {
  const role_id = req.body.data.role_id
  const query = 'SELECT * FROM role WHERE role_id = :role_id ;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        role_id: role_id
      }
    })
    .then(role => {
      if (role.length === 1) {
        res.json(role[0])
      } else {
        res.status(404).json({})
      }
    })
})

/* Add a role */
router.post('/roles/add', function (req, res, next) {
  const role_id = req.body.data.role_id
  const role_name = req.body.data.role_name

  const query = 'INSERT INTO role (role_id, role_name) VALUES (:role_id, :role_name) ;'
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        role_id: role_id,
        role_name: role_name
      }
    })
    .then(result => {
      res.send('/roles')
    })
})

export default router
