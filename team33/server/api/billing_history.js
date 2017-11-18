import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

// billing_history(patient_id, appointment_id, amount, date_paid)
// Primary Key:
//   patient_id, appointment_id
// Foreign Key:
//   patient_id references User
// appointment_id references Appointment
// Functional Dependencies:
//   patient_id, appointment_id -> amount, date_paid

/* Get a single appointment's bill */
router.get('/billings', bodyParser.json(), function (req, res, next) {
  const patient_id = req.body.data.patient_id
  const appointment_id = req.body.data.appointment_id

  const query = `SELECT * FROM billing_history
                  WHERE patient_id = :patient_id AND appointment_id = :appointment_id;`
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        patient_id: patient_id,
        appointment_id: appointment_id
      }
    })
    .then(bill => {
      if (bill.length === 1 ) {
        res.json(bill[0])
      } else {
        res.status(404).json({})
      }
    })
})

/* Get all of a patient's bills */
router.get('/billings', bodyParser.json(), function (req, res, next) {
  const patient_id = req.body.data.patient_id

  const query = `SELECT * FROM billing_history
                  WHERE patient_id = :patient_id;`
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        patient_id: patient_id
      }
    })
    .then(bills => {
      if (bills) { // If non-zero length of bills, return it?
        res.json(bills)
      } else {
        res.status(404).json({})
      }
    })
})

/* update a bill. Use this to say it was paid on a certain date */
router.post('/billings/update', bodyParser.json(), function (req, res, next) {
  const patient_id = req.body.data.patient_id
  const appointment_id = req.body.data.appointment_id
  const date_paid = req.body.data.date_paid

  const query = `UPDATE billing_history
                  SET date_paid = :date_paid
                  WHERE patient_id = :patient_id AND appointment_id = :appointment_id;`
  connection.query(query,
    {
      type: connection.QueryTypes.UPDATE,
      replacements: {
        patient_id: patient_id,
        appointment_id: appointment_id,
        date_paid: date_paid
      }
    })
    .then(result => {
      // result[1] is the number of rows changed
      res.send('/users')
    })
})

router.post('/billings/add', bodyParser.json(), function (req, res, next) {
  const patient_id = req.body.data.patient_id
  const appointment_id = req.body.data.appointment_id
  const amount = req.body.data.amount
  const date_paid = req.body.data.date_paid

  const query = `INSERT INTO billing_history (patient_id, appointment_id, amount, date_paid)
                  VALUES (:patient_id, :appointment_id, :amount, :date_paid);`
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        patient_id: patient_id,
        appointment_id: appointment_id,
        amount: amount,
        date_paid: date_paid
      }
    })
    .then(result => {
      res.send('/billings')
    })
})

export default router
