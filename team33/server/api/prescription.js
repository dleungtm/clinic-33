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

/* lookup a single prescrip for a patient */
router.get('/prescriptions', bodyParser.json(), function (req, res, next) {
  const patient_id = req.body.data.patient_id
  const clinician_id = req.body.data.clinician_id
  const medication_id = req.body.data.medication_id
  const date_prescribed = req.body.data.date_prescribed

  const query = 'SELECT * FROM prescription WHERE patient_id = :patient_id AND clinician_id = :clinician_id AND medication_id = :medication_id AND date_prescribed = :date_prescribed;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        patient_id:  patient_id,
        clinician_id: clinician_id,
        medication_id: medication_id,
        date_prescribed: date_prescribed
      }
    })
    .then(prescriptions => {
      console.log(prescriptions)
      res.json(prescriptions)
    })
})

/* lookup all prescriptions for a patient */
router.get('/prescriptions/:patient_id', function (req, res, next) {
  const patient_id = req.params.patient_id

  const query = `SELECT uc.first_name cfn, uc.last_name cln, up.first_name pfn, up.last_name pln, p.date_prescribed, p.dosage, m.name
	                FROM prescription p
                  INNER JOIN clinic_user uc ON p.clinician_id = uc.user_id
                  LEFT JOIN clinic_user up ON p.filled_by = up.user_id
                  INNER JOIN medication m ON p.medication_id = m.medication_id
                  WHERE p.patient_id = :patient_id`
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        patient_id:  patient_id
      }
    })
    .then(prescriptions => {
      console.log(prescriptions)
      if (prescriptions.length > 0) {
        res.json(prescriptions)
      } else {
        res.status(404).json({})
      }
    })
})

// /* lookup all prescriptions for a patient */
// router.get('/prescriptions', bodyParser.json(), function (req, res, next) {
//   const patient_id = req.body.data.patient_id
//   const clinician_id = req.body.data.clinician_id
//   const medication_id = req.body.data.medication_id
//
//   const query = 'SELECT * FROM prescription WHERE patient_id = :patient_id AND clinician_id = :clinician_id AND medication_id = :medication_id ;'
//   connection.query(query, { type: connection.QueryTypes.SELECT })
//     .then(prescriptions => {
//       console.log(prescriptions)
//       res.json(prescriptions)
//     })
// })

/* Add a prescription for a particular patient*/
router.post('/prescriptions', bodyParser.json(), function (req, res, next) {
  const patient_id = req.body.data.patient_id
  const clinician_id = req.body.data.clinician_id
  const medication_id = req.body.data.medication_id
  const date_prescribed = req.body.data.date_prescribed
  const dosage = req.body.data.dosage
  const filled_by = req.body.data.filled_by

  const query = 'INSERT INTO prescription (patient_id, clinician_id, medication_id, date_prescribed, dosage, filled_by) VALUES (:patient_id, :clinician_id, :medication_id, :date_prescribed, :dosage, :filled_by); '

  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        patient_id: patient_id,
        clinician_id: clinician_id,
        medication_id: medication_id,
        date_prescribed: date_prescribed,
        dosage: dosage,
        filled_by: filled_by
      }
    })
    .then(result => {
      res.send('/prescriptions')
    })
})

export default router
