import { Router } from 'express'
var connection = require('../configs/sequelize')

const router = Router()

/* GET timeblocks list. */
router.get('/timeblocks', function (req, res, next) {
  const query = `SELECT * FROM timeblock;`
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(timeblocks => {
      res.json(timeblocks)
    })
})

/* GET timeblock by ID. */
router.get('/timeblocks/:id', function (req, res, next) {
  const timeblock_id = req.params.timeblock_id
  const query = `SELECT * FROM timeblock WHERE timeblock_id = :timeblock_id ;`
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        timeblock_id: timeblock_id
      }
    })
    .then(timeblock => {
      if (timeblock.length === 1) {
        res.json(timeblock[0])
      } else {
        res.status(404).json({})
      }
    })
})

export default router
