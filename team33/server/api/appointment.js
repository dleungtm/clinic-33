import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* Get all appointments */
router.get('/appointments', function (req, res, next) {
  const query = `SELECT appointment_id, to_char(date, :date_format) as date, to_char(start_time, :time_format) as start_time, p.first_name as patient_fname, p.last_name as patient_lname, c.last_name
                  FROM appointment a, timeblock t, clinic_user c, clinic_user p 
                  WHERE a.patient_id = p.user_id
                    AND a.clinician_id = c.user_id
                    AND t.timeblock_id = a.timeblock_id;`
  connection.query(query, {
    type: connection.QueryTypes.SELECT,
    replacements: {
      date_format: 'Month d, YYYY',
      time_format: 'HH24:MI'
    }
  })
    .then(appointments => {
      res.json(appointments)
    })
})

/* Get Appointments by User ID */
router.get('/appointments/user/:user_id', function (req, res, next) {
  const user_id = req.params.user_id
  const query = `SELECT appointment_id, to_char(date, :date_format) as date, to_char(start_time, :time_format) as start_time, last_name
                  FROM appointment a, timeblock t, clinic_user c
                  WHERE a.clinician_id = :user_id OR a.patient_id = :user_id
                    AND c.user_id = :user_id
                    AND t.timeblock_id = a.timeblock_id;`
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        user_id: user_id,
        date_format: 'Month d, YYYY',
        time_format: 'HH24:MI'
      }
    })
    .then(appointments => {
      res.json(appointments)
    })
})

/* Get Appointment by ID */
router.get('/appointments/:id', function (req, res, next) {
  const appointment_id = req.params.id
  const query = 'SELECT * FROM appointment WHERE appointment_id = :appointment_id;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        appointment_id: appointment_id
      }
    })
    .then(appointments => {
      if (appointments.length === 1) {
        res.json(appointments[0])
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
      res.json({ message: 'Appointment Created.' })
    })
})

/* Delete Appointment by ID */
router.post('/appointments/delete', bodyParser.json(), function (req, res, next) {
  const appointment_id = req.body.data.appointment_id

  const query = `DELETE FROM appointment
                  WHERE appointment_id = :appointment_id;`
  connection.query(query,
    {
      type: connection.QueryTypes.DELETE,
      replacements: {
        appointment_id: appointment_id
      }
    })
    .then(result => {
      res.json({ message: 'Appointment Cancelled.' })
    })
})

export default router
