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

/* GROUP BY query, get total medication numbers from pending prescriptions */
router.get('/medications/pending_prescriptions', function (req, res, next) {
  const query = `SELECT COUNT(dosage), name
                  FROM Prescription p, Medication m
                  WHERE p.medication_id = m.medication_id AND p.filled_by IS NULL
                  GROUP BY name`
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(medications => {
      res.json(medications)
    })
})

/* GET medication by id */
router.get('/medications/:id', function (req, res, next) {
  const medication_id = req.params.id
  const query = `SELECT * FROM medication
                  WHERE medication_id = :medication_id;`

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
        res.send({'message': 'The requested medication was not found.'})
      }
    })
})

router.post('/medications/update/', bodyParser.json(), function (req, res, next) {
  const originalName = req.body.data.originalName
  const name = req.body.data.name
  const inventory = req.body.data.inventory
  const unit_price = req.body.data.unit_price

  const query = `UPDATE medication
                  SET name = :name, inventory = :inventory, unit_price = :unit_price
                  WHERE name = :originalName;`
  connection.query(query,
    {
      type: connection.QueryTypes.UPDATE,
      replacements: {
        originalName: originalName,
        name: name,
        inventory: inventory,
        unit_price: unit_price
      }
    })
    .then(result => {
      res.send({'message': 'Medication Updated.'})
    })
    .catch((error) => {
      for (var i in error.errors) {
        console.log(error.errors[i])
        if (error.errors[i].type === 'unique violation') {
          console.log('Unique Medication Name Violation - Update Failed.')
          res.json({'message': 'Medication Name Already Exists - Could Not Update.'})
          return
        }
      }
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
    .catch((error) => {
      for (var i in error.errors) {
        if (error.errors[i].type === 'unique violation') {
          res.json({
            message: 'Medication Name Already Exists - Could Not Add.'
          })
          return
        }
      }
    })
})

export default router
