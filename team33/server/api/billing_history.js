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

/* Get all of a patient's billing history including date from appointment */
router.get('/billings/:user_id', function (req, res, next) {
  const user_id = req.params.user_id
  const query = `SELECT to_char(a.date, :date_format) as date_billed, b.amount, to_char(b.date_paid, :date_format) as date_paid, b.patient_id, b.appointment_id
	                FROM billing_history b
                  INNER JOIN appointment a ON b.appointment_id = a.appointment_id
                  WHERE b.patient_id = :user_id;`

  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        user_id: user_id,
        date_format: 'Month dd, YYYY'
      }
    })
    .then(bills => {
        res.json(bills)
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
      res.json(result)
    })
})

/* update the amount in a bill. User this to change the bill amount */
router.post('/billings/update_amount', bodyParser.json(), function (req, res, next) {
  const patient_id = req.body.data.patient_id
  const appointment_id = req.body.data.appointment_id
  const new_bill_amount = req.body.data.new_bill_amount

  const query = `UPDATE billing_history
                  SET amount = :new_bill_amount
                  WHERE patient_id = :patient_id AND appointment_id = :appointment_id;`
  connection.query(query,
    {
      type: connection.QueryTypes.UPDATE,
      replacements: {
        patient_id: patient_id,
        appointment_id: appointment_id,
        new_bill_amount: new_bill_amount
      }
    })
    .then(result => {
      // result[1] is the number of rows changed
      res.json(result)
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
