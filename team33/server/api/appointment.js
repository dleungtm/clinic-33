import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* Get all appointments */
router.get('/appointments', function (req, res, next) {
  const query = 'SELECT * FROM appointments;'
  connection.query(query, {type: connection.QueryTypes.SELECT})
    .then(appointments => {
      console.log(appointments)
      res.join(appointments)
    })
})

/* Get Appointment by ID */
router.get('/appointments/:id', function (req, res, next) {
  const appointment_id = req.body.appointment_id
  const query = 'SELECT * FROM appointment WHERE appointment_id = :appointment_id;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        appointment_id: appointment_id
      }
    })
    .then(appointments => {
      if (appointments.length === 1){
        req.json(appointments[0])
      } else {
        res.status(404).json({})
      }
    })
})

/* Create new appointment */
router.post('/appointments/add', bodyParser.json(), function (req, res, next) {
  const appointment_id = req.body.data.appointment_id
  const date = req.body.data.date
  const timeblock_id = req.body.data.timeblock_id
  const patient_id = req.body.data.patient_id
  const clinician_id = req.body.data.clinician_id

  const query = 'INSERT INTO appointment (appointment_id, date, timeblock_id, patient_id, clinician_id) VALUES (:appointment_id, :date, :timeblock_id, :patient_id, :clinician_id);'
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        appointment_id: appointment_id,
        date: date,
        timeblock_id: timeblock_id,
        patient_id: patient_id,
        clinician_id: clinician_id
      }
    })
    .then(result => {
      // result[1] is the number of rows changed
      res.send('/users')
    })
})

export default router
