import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET medications listing */
router.get('/medications', function (req, res, next) {
  const query = `SELECT * FROM medication;`
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(medications => {
      res.json(medications)
    })
})

/* GET medication by id */
router.get('/medications/:id', function (req, res, next) {
  const medication_id = req.params.medication_id
  const query = `SELECT * FROM medication
                  WHERE medication_id = :id ;`

  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        medication_id: medication_id
      }
    })
    .then(medication => {
      if (medication.length === 1) {
        res.json(medication[0])
      } else {
        res.status(404).json({})
      }
    })
})

router.post('/medications/update/', bodyParser.json(), function (req, res, next) {
  const medication_id = req.body.data.medication_id
  const name = req.body.data.name
  const inventory = req.body.data.inventory
  const unit_price = req.body.data.unit_price

  const query = `UPDATE medication
                  SET name = :name, inventory = :inventory, unit_price = :unit_price
                  WHERE medication_id = :medication_id ;`
  connection.query(query,
    {
      type: connection.QueryTypes.UPDATE,
      replacements: {
        medication_id: medication_id,
        name: name,
        inventory: inventory,
        unit_price: unit_price
      }
    })
    .then(result => {
      res.send('/medications')
    })
})

router.post('/medications/add', bodyParser.json(), function (req, res, next) {
  const name = req.body.data.name
  const inventory = req.body.data.inventory
  const unit_price = req.body.data.unit_price

  const query = `INSERT INTO medication (name, inventory, unit_price)
                  VALUES (:name, :inventory, :unit_price);`
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        name: name,
        inventory: inventory,
        unit_price: unit_price
      }
    })
    .then(result => {
      res.json({message: 'Medication Added.'})
    })
})

export default router
