const express = require('express')
const router = express.Router()
const Login = require('../Controllers/loginTecherController')

router.post('/login', Login.loginTeacher)
router.get('/getAll',Login.getAllTeacher)

module.exports = router