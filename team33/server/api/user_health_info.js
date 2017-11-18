import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET user health information listing */
router.get('/userhealthinfo', function (req, res, next) {
  const query = `SELECT * FROM user_health_info;`
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(uhi => {
      console.log(uhi)
      res.json(uhi)
    })
})

/* GET user health information by user_id */
router.get('/userhealthinfo/:user_id', function (req, res, next) {
  const user_id = req.params.user_id
  const query = `SELECT * FROM user_health_info
                  WHERE user_id = :user_id;`
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

router.post('/userhealthinfo/update', bodyParser.json(), function (req, res, next) {
  const user_id = req.body.data.user_id
  const dob = req.body.data.dob
  const phn = req.body.data.phn
  const height = req.body.data.height
  const blood_type = req.body.data.blood_type
  const sex = req.body.data.sex

  const query = `UPDATE medication
                  SET dob = :dob, phn = :phn, height = :height, blood_type = :blood_type, sex = :sex
                  WHERE user_id = :user_id;`
  connection.query(query,
    {
      type: connection.QueryTypes.UPDATE,
      replacements: {
        user_id: user_id,
        dob: dob,
        phn: phn,
        height: height,
        blood_type: blood_type,
        sex: sex
      }
    })
    .then(result => {
      res.send('/userhealthinfo')
    })
})

router.post('/userhealthinfo/add', bodyParser.json(), function (req, res, next) {
  const user_id = req.body.data.user_id
  const dob = req.body.data.dob
  const phn = req.body.data.phn
  const height = req.body.data.height
  const blood_type = req.body.data.blood_type
  const sex = req.body.data.sex

  const query = `INSERT INTO user_health_info (user_id, dob, phn, height, blood_type, sex)
                  VALUES (:user_id, :dob, :phn, :height, :blood_type, :sex);`
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        user_id: user_id,
        dob: dob,
        phn: phn,
        height: height,
        blood_type: blood_type,
        sex: sex
      }
    })
    .then(result => {
      res.send('/userhealthinfo')
    })
})

export default router
