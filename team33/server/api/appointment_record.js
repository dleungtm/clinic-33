import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* Get all appointment records for a patient */
router.get('/appointment_records/:patient_id', bodyParser.json(), function (req, res, next) {
  const patient_id = req.params.patient_id

  const query = 'SELECT * FROM appointment_record WHERE patient_id = :patient_id ;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        patient_id: patient_id
      }
    })
    .then(appointments => {
      res.json(appointments)
    })
})

/* Get a single appointment record */
router.get('/appointment_records/:patient_id/:appointment_id', bodyParser.json(), function (req, res, next) {
  const patient_id = req.params.patient_id
  const appointment_id = req.params.appointment_id

  const query = 'SELECT * FROM appointment_record WHERE patient_id = :patient_id AND appointment_id = :appointment_id;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        patient_id: patient_id,
        appointment_id: appointment_id
      }
    })
    .then(appointment => {
      if (appointment.length === 1) {
        res.json(appointment[0])
      } else {
        res.status(404).json({})
      }
    })
})

/* Create an appointment record */
router.post('/appointment_records', bodyParser.json(), function (req, res, next) {
  const patient_id = req.body.data.patient_id
  const appointment_id = req.body.data.appointment_id
  const notes = req.body.data.notes

  const query = 'INSERT INTO appointment_record (patient_id, appointment_id, notes) VALUES (:patient_id, :appointment_id, :notes);'
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        patient_id: patient_id,
        appointment_id: appointment_id,
        notes: notes
      }
    })
    .then(result => {
      res.send('/appointment_records')
    })
})

export default router
