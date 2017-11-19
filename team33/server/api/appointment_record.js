import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* Get all appointment record information for a patient */
router.get('/appointment_records/:patient_id', bodyParser.json(), function (req, res, next) {
  const patient_id = req.params.patient_id

  const query = `SELECT to_char(ap.date, :date_format) as date, to_char(tb.start_time, :time_format) as start_time, ( cu.first_name || ' ' || cu.last_name) as clinician_name, ar.notes
                  FROM appointment_record ar
                  INNER JOIN appointment ap ON ar.appointment_id = ap.appointment_id
                  INNER JOIN clinic_user cu ON ap.clinician_id = cu.user_id
                  INNER JOIN timeblock tb ON ap.timeblock_id = tb.timeblock_id
                  WHERE ar.patient_id = :patient_id;`
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        patient_id: patient_id,
        date_format: 'Month dd, YYYY',
        time_format: 'HH24:MI'
      }
    })
    .then(appointmentRecords => {
      console.log(appointmentRecords)
      res.json(appointmentRecords)
    })
})

/* Get a single appointment record */
router.get('/appointment_records/id/:appointment_id', bodyParser.json(), function (req, res, next) {
  const appointment_id = req.params.appointment_id

  const query = `SELECT to_char(ap.date, :date_format) as date, to_char(tb.start_time, :time_format) as start_time, ( cu.first_name || ' ' || cu.last_name) as clinician_name, ( pu.first_name || ' ' || pu.last_name) as patient_name, ar.notes
                  FROM appointment_record ar
                  INNER JOIN appointment ap ON ar.appointment_id = ap.appointment_id
                  INNER JOIN clinic_user pu ON ap.patient_id = pu.user_id                  
                  INNER JOIN clinic_user cu ON ap.clinician_id = cu.user_id
                  INNER JOIN timeblock tb ON ap.timeblock_id = tb.timeblock_id
                  WHERE ar.appointment_id = :appointment_id;`
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        appointment_id: appointment_id,
        date_format: 'Month dd, YYYY',
        time_format: 'HH24:MI'
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

  const query = `INSERT INTO appointment_record (patient_id, appointment_id, notes)
                  VALUES (:patient_id, :appointment_id, :notes);`
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
      res.json({ message: 'Appointment Record Created.' })
    })
})

/* Update an appointment record (save notes) */
router.post('/appointment_records/update', bodyParser.json(), function (req, res, next) {
  const appointment_id = req.body.data.appointment_id
  const notes = req.body.data.notes

  const query = `UPDATE appointment_record
                  SET notes = :notes
                  WHERE appointment_id = :appointment_id;`
  connection.query(query,
    {
      type: connection.QueryTypes.UPDATE,
      replacements: {
        appointment_id: appointment_id,
        notes: notes
      }
    })
    .then(result => {
      res.json({ message: 'Appointment Record Updated.' })
    })
})

export default router
