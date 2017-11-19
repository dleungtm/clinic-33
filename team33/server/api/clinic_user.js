import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET all users along with their roles. */
router.get('/users', function (req, res, next) {
  const query = `SELECT c.user_id, first_name, last_name, initcap(role_name) as role_name
                  FROM clinic_user c
                  LEFT JOIN user_role u ON u.user_id = c.user_id
                  INNER JOIN role r ON r.role_id = u.role_id;`
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT
    })
    .then(users => {
      res.json(users)
    })
})

/* GET all clinic staff. */
router.get('/users/staff', function (req, res, next) {
  const query = `SELECT DISTINCT c.user_id, first_name, last_name
                  FROM clinic_user c INNER JOIN user_role u ON u.user_id = c.user_id
                  WHERE u.role_id IN (1, 2, 3, 4);`
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT
    })
    .then(users => {
      res.json(users)
    })
})
/* GET All Active Patients. */
router.get('/users/patients', function (req, res, next) {
  const query = `SELECT DISTINCT c.user_id, first_name || ' ' || last_name as name
                  FROM clinic_user c
                  INNER JOIN user_role u ON u.user_id = c.user_id
                  WHERE u.role_id = 5 AND is_active = true;`
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT
    })
    .then(patients => {
      res.json(patients)
    })
})

/* GET All Active Clinicians. */
router.get('/users/clinicians', function (req, res, next) {
  const query = `SELECT DISTINCT c.user_id, first_name || ' ' || last_name as name
                  FROM clinic_user c
                  INNER JOIN user_role u ON u.user_id = c.user_id
                  WHERE u.role_id = 2 AND is_active = TRUE;`
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT
    })
    .then(clinicians => {
      res.json(clinicians)
    })
})

/* GET 'all' patient information including health info */
router.get('/users/all_info', function (req, res, next) {
  const query = `SELECT c.user_id, c.first_name, c.last_name, u.phn, u.dob, u.height, u.blood_type, u.sex
                  FROM clinic_user c
                  INNER JOIN user_health_info u ON c.user_id = u.user_id
                  INNER JOIN user_role ur ON c.user_id = ur.user_id
                  INNER JOIN role r ON ur.role_id = r.role_id
                  WHERE r.role_name = 'patient';`

  connection.query(query,
    {
      type: connection.QueryTypes.SELECT
    })
    .then(info => {
      res.json(info)
    })
})

/* GET 'all' patient information including health info by user_id */
router.get('/users/all_info/:user_id', function (req, res, next) {
  const user_id = req.params.user_id
  const query = `SELECT c.user_id, c.first_name, c.last_name, u.phn, u.dob, u.height, u.blood_type, u.sex
                  FROM clinic_user c
                  INNER JOIN user_health_info u ON c.user_id = u.user_id
                  WHERE c.user_id = :user_id;`

  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        user_id: user_id
      }
    })
    .then(info => {
      if (info.length === 1) {
        console.log(info[0])
        res.json(info[0])
      } else {
        res.status(404).json({})
      }
    })
})

/* GET user by ID. */
router.get('/users/:user_id', function (req, res, next) {
  const user_id = req.params.user_id
  const query = `SELECT * FROM clinic_user WHERE user_id = :user_id;`
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        user_id: user_id
      }
    })
    .then(user => {
      if (user.length === 1 ) {
        res.json(user[0])
      } else {
        res.status(404).json({})
      }
    })
})

/* Update User by ID and Username */
router.post('/users/update', bodyParser.json(), function (req, res, next) {
  const user_id = req.body.data.user_id
  const first_name = req.body.data.first_name
  const last_name = req.body.data.last_name
  const phone_number = req.body.data.phone_number
  const address = req.body.data.address
  const username = req.body.data.username
  const password = req.body.data.password
  const is_active = req.body.data.is_active

  const query = `UPDATE clinic_user
                  SET first_name = :first_name, last_name = :last_name, phone_number = :phone_number, address = :address, password = :password, is_active = :is_active
                  WHERE user_id = :user_id AND username = :username;`
  connection.query(query,
    {
      type: connection.QueryTypes.UPDATE,
      replacements: {
        user_id: user_id,
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        address: address,
        username: username,
        password: password,
        is_active: is_active
      }
    })
    .then(result => {
      // result[1] is the number of rows changed
      res.send('/users')
    })
})

/* CREATE New User */
router.post('/users/add', bodyParser.json(), function (req, res, next) {
  const user_id = req.body.data.user_id
  const first_name = req.body.data.first_name
  const last_name = req.body.data.last_name
  const phone_number = req.body.data.phone_number
  const address = req.body.data.address
  const username = req.body.data.username
  const password = req.body.data.password
  const is_active = req.body.data.is_active
  const dob = req.body.data.dob
  const phn = req.body.data.phn
  const height = req.body.data.height
  const blood_type = req.body.data.blood_type
  const sex = req.body.data.sex

  const query = `WITH
                  newUser AS (
                    INSERT INTO clinic_user (first_name, last_name, phone_number, address, username, password, is_active)
                    VALUES (:first_name, :last_name, :phone_number, :address, :username, :password, :is_active)
                    RETURNING user_id
                  ), newUserRole AS (
                    INSERT INTO user_role (user_id, role_id) SELECT user_id, 5 FROM newUser
                    RETURNING user_id
                  )
                    INSERT INTO user_health_info (user_id, phn, dob, height, blood_type, sex)
                    SELECT user_id, :phn, :dob, :height, :blood_type, :sex FROM newUserRole;`
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        address: address,
        username: username,
        password: password,
        is_active: is_active,
        dob: dob,
        phn: phn,
        height: height,
        blood_type: blood_type,
        sex: sex
      }
    }
  )
    .then(result => {    
      res.send('/users')
    })
})

/* Get Availabilities by User ID */
router.get('/users/:user_id/availability', function (req, res, next) {
  const user_id = req.params.user_id
  const query = `SELECT a.timeblock_id, to_char(start_time, :time_format) as start_time, day_of_week, clinician_id, is_active
                  FROM availability a, timeblock t
                  WHERE clinician_id = :user_id
                    AND a.timeblock_id = t.timeblock_id;`
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        user_id: user_id,
        time_format: 'HH24:MI'
      }
    })
    .then(availabilities => {
      res.json(availabilities)
    })
})

// Toggle Availability
router.post('/users/:user_id/availability', bodyParser.json(), function (req, res, next) {
  const timeblock_id = req.body.data.timeblock_id
  const day_of_week = req.body.data.day_of_week
  const clinician_id = req.params.user_id

  const query = `UPDATE availability
                  SET is_active = NOT is_active
                  WHERE timeblock_id = :timeblock_id
                    AND day_of_week = :day_of_week
                    AND clinician_id = :clinician_id`
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        timeblock_id: timeblock_id,
        day_of_week: day_of_week,
        clinician_id: clinician_id
      }
    })
    .then(result => {
      res.send('/users/availability')
    })
})

/* Initialize Availabilities by User ID */
router.post('/users/availability/init', function (req, res, next) {
  const user_id = req.body.data.user_id
  const query = `INSERT INTO availability (timeblock_id, day_of_week, clinician_id)
                  VALUES
                  (1, 0, :user_id),
                  (2, 0, :user_id),
                  (3, 0, :user_id),
                  (4, 0, :user_id),
                  (5, 0, :user_id),
                  (6, 0, :user_id),
                  (7, 0, :user_id),
                  (8, 0, :user_id),
                  (9, 0, :user_id),
                  (10, 0, :user_id),
                  (11, 0, :user_id),
                  (12, 0, :user_id),
                  (1, 1, :user_id),
                  (2, 1, :user_id),
                  (3, 1, :user_id),
                  (4, 1, :user_id),
                  (5, 1, :user_id),
                  (6, 1, :user_id),
                  (7, 1, :user_id),
                  (8, 1, :user_id),
                  (9, 1, :user_id),
                  (10, 1, :user_id),
                  (11, 1, :user_id),
                  (12, 1, :user_id),
                  (1, 2, :user_id),
                  (2, 2, :user_id),
                  (3, 2, :user_id),
                  (4, 2, :user_id),
                  (5, 2, :user_id),
                  (6, 2, :user_id),
                  (7, 2, :user_id),
                  (8, 2, :user_id),
                  (9, 2, :user_id),
                  (10, 2, :user_id),
                  (11, 2, :user_id),
                  (12, 2, :user_id),
                  (1, 3, :user_id),
                  (2, 3, :user_id),
                  (3, 3, :user_id),
                  (4, 3, :user_id),
                  (5, 3, :user_id),
                  (6, 3, :user_id),
                  (7, 3, :user_id),
                  (8, 3, :user_id),
                  (9, 3, :user_id),
                  (10, 3, :user_id),
                  (11, 3, :user_id),
                  (12, 3, :user_id),
                  (1, 4, :user_id),
                  (2, 4, :user_id),
                  (3, 4, :user_id),
                  (4, 4, :user_id),
                  (5, 4, :user_id),
                  (6, 4, :user_id),
                  (7, 4, :user_id),
                  (8, 4, :user_id),
                  (9, 4, :user_id),
                  (10, 4, :user_id),
                  (11, 4, :user_id),
                  (12, 4, :user_id),
                  (1, 5, :user_id),
                  (2, 5, :user_id),
                  (3, 5, :user_id),
                  (4, 5, :user_id),
                  (5, 5, :user_id),
                  (6, 5, :user_id),
                  (7, 5, :user_id),
                  (8, 5, :user_id),
                  (9, 5, :user_id),
                  (10, 5, :user_id),
                  (11, 5, :user_id),
                  (12, 5, :user_id),
                  (1, 6, :user_id),
                  (2, 6, :user_id),
                  (3, 6, :user_id),
                  (4, 6, :user_id),
                  (5, 6, :user_id),
                  (6, 6, :user_id),
                  (7, 6, :user_id),
                  (8, 6, :user_id),
                  (9, 6, :user_id),
                  (10, 6, :user_id),
                  (11, 6, :user_id),
                  (12, 6, :user_id);`
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        user_id: user_id
      }
    })
    .then(result => {
      res.json({'message': 'Successfully initialized availabilities.'})
    })
})

/* Update user password */
router.post('/users/update_password', bodyParser.json(), function (req, res, next) {
  const user_id = req.body.data.userId
  const new_password = req.body.data.newPassword

  const query = `UPDATE clinic_user
                  SET password = :new_password
                  WHERE user_id = :user_id;`
  connection.query(query,
    {
      type: connection.QueryTypes.UPDATE,
      replacements: {
        user_id: user_id,
        new_password: new_password
      }
    })
    .then(result => {    
      res.json(result)
    })
})

/* Get a user by id and password */
router.post('/users/get_by_id_and_pass', bodyParser.json(), function (req, res) {
  const user_id = req.body.data.userId
  const password = req.body.data.password

  const query = `SELECT user_id
                  FROM clinic_user
                  WHERE user_id = :user_id AND password = :password;`

  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        user_id: user_id,
        password: password
      }
    })
    .then(user => {
      if (user.length === 1) {
        res.json(user[0])
      } else {
        res.status(401).json({ err: 'The password entered was incorrect.' })
      }
    })
    .catch(err => {
      res.status(401).json({ err })
    })
})

/* update a clinic_user's active status */
router.post('/users/is_active', bodyParser.json(), function (req, res, next) {
  const user_id = req.body.data.user_id
  const is_active = req.body.data.is_active

  const query = `UPDATE clinic_user
                  SET is_active = :is_active
                  WHERE user_id = :user_id;`
  connection.query(query,
    {
      type: connection.QueryTypes.UPDATE,
      replacements: {
        user_id: user_id,
        is_active: is_active
      }
    })
    .then(result => {
      res.send('/users')
    })
})
export default router
