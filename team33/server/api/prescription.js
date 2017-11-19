import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

// prescription(patient_id, clinician_id, medication_id, date_prescribed, dosage, filled_by)
// Primary Key:
//   patient_id, clinician_id, medication_id, date_prescribed
// Foreign Key:
//   patient_id references User
// clinician_id references User
// medication_id references Medication
// filled_by references User
// Functional Dependencies:
//   patient_id, clinician_id, medication_id, date_prescribed -> dosage, filled_by

/* Get All Prescriptions */
router.get('/prescriptions', function (req, res, next) {
  const query = `SELECT pu.first_name || ' ' || pu.last_name as patient_name, (cu.first_name || ' ' || cu.last_name) as clinician_name, CASE WHEN fu.first_name IS NOT NULL AND fu.last_name IS NOT NULL THEN (fu.first_name || ' ' || fu.last_name) ELSE 'Not Filled' END as pharmacist_name, to_char(p.date_prescribed, :date_format) as date, p.dosage, m.name
                  FROM prescription p
                  INNER JOIN clinic_user pu ON p.patient_id = pu.user_id
                  INNER JOIN clinic_user cu ON p.clinician_id = cu.user_id
                  LEFT JOIN clinic_user fu ON p.filled_by = fu.user_id
                  INNER JOIN medication m ON p.medication_id = m.medication_id`
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        date_format: 'Month dd, YYYY'
      }
    })
    .then(prescriptions => {
      res.json(prescriptions)
    })
})

/* lookup all prescriptions for a patient */
router.get('/prescriptions/patient/:patient_id', function (req, res, next) {
  const patient_id = req.params.patient_id

  const query = `SELECT (cu.first_name || ' ' || cu.last_name) as clinician_name, CASE WHEN fu.first_name IS NOT NULL AND fu.last_name IS NOT NULL THEN (fu.first_name || ' ' || fu.last_name) ELSE 'Not Filled' END as pharmacist_name, to_char(p.date_prescribed, :date_format) as date, p.dosage, m.name
                  FROM prescription p
                  INNER JOIN clinic_user cu ON p.clinician_id = cu.user_id
                  LEFT JOIN clinic_user fu ON p.filled_by = fu.user_id
                  INNER JOIN medication m ON p.medication_id = m.medication_id
                  WHERE p.patient_id = :patient_id`
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        patient_id: patient_id,
        date_format: 'Month dd, YYYY'
      }
    })
    .then(prescriptions => {
      res.json(prescriptions)
    })
})

/* lookup all prescriptions made by a clinician */
router.get('/prescriptions/clinician/:clinician_id', function (req, res, next) {
  const clinician_id = req.params.clinician_id

  const query = `SELECT pu.first_name || ' ' || pu.last_name as patient_name, (cu.first_name || ' ' || cu.last_name) as clinician_name, CASE WHEN fu.first_name IS NOT NULL AND fu.last_name IS NOT NULL THEN (fu.first_name || ' ' || fu.last_name) ELSE 'Not Filled' END as pharmacist_name, to_char(p.date_prescribed, :date_format) as date, p.dosage, m.name
                  FROM prescription p
                  INNER JOIN clinic_user pu ON p.patient_id = pu.user_id
                  INNER JOIN clinic_user cu ON p.clinician_id = cu.user_id
                  LEFT JOIN clinic_user fu ON p.filled_by = fu.user_id
                  INNER JOIN medication m ON p.medication_id = m.medication_id
                  WHERE p.clinician_id = :clinician_id`
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        clinician_id: clinician_id,
        date_format: 'Month dd, YYYY'
      }
    })
    .then(prescriptions => {
      res.json(prescriptions)
    })
})

/* Add a prescription for a particular patient */
router.post('/prescriptions/create', bodyParser.json(), function (req, res, next) {
  const patient_id = req.body.data.patient_id
  const clinician_id = req.body.data.clinician_id
  const medication_id = req.body.data.medication_id
  const date_prescribed = req.body.data.date_prescribed
  const dosage = req.body.data.dosage

  const query = `INSERT INTO prescription (patient_id, clinician_id, medication_id, date_prescribed, dosage)
                  VALUES (:patient_id, :clinician_id, :medication_id, :date_prescribed, :dosage);`

  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        patient_id: patient_id,
        clinician_id: clinician_id,
        medication_id: medication_id,
        date_prescribed: date_prescribed,
        dosage: dosage
      }
    })
    .then(result => {
      res.json({ message: 'Prescription Created.' })
    })
})

export default router
