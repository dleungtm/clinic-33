import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* Returns all availabilities */
router.get('/availability', function (req, res, next) {
  const query = 'SELECT * FROM availability'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(availability => {
      console.log(availability)
      res.json(availability)
    })
})

// TODO: nice to have would be lookups on availability by doctor

/* get availability by ID */
router.get('/availability/:id', function (req, res, next) {
  const availability_id = req.params.availability_id
  const query = 'SELECT * FROM availability WHERE availability_id = :availability_id ;'
  connection.query(query,
    {
      type: connection.QueryType.SELECT,
      replacements: {
        availability_id: availability_id
      }
    })
    .then(availability => {
      if (availability.length === 1) {
        res.json(availability[0])
      } else {
        res.status(404).json({})
      }
    })
})

export default router
