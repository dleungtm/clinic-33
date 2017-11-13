import { Router } from 'express'

import appointments from './appointment'
import appointment_record from './appointment_record'
import availability from './availability'
import billing_history from './billing_history'
import clinic_users from './clinic_user'
import medications from './medication'
import prescriptions from './prescription'
import roles from './role'
import timeblock from './timeblock'
import user_health_info from './user_health_info'
import user_role from './user_role'

const router = Router()

// Add USERS Routes
router.use(appointments)
router.use(appointment_record)
router.use(availability)
router.use(billing_history)
router.use(clinic_users)
router.use(medications)
router.use(prescriptions)
router.use(roles)
router.use(timeblock)
router.use(user_health_info)
router.use(user_role)

export default router
