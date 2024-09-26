const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/studentController');
const checkLogin = require('../Controllers/loginTecherController');
const StudentModel = require('../Model/studentModel');

router.get('/:token', checkLogin.verifyTeacher, checkLogin.phanquyen, studentController.getAllStudent)
router.post('/:token', checkLogin.verifyTeacher,  checkLogin.phanquyen, studentController.createStudent)
router.put('/:token/:id', checkLogin.verifyTeacher,  checkLogin.phanquyen, studentController.updateStudent)
router.delete('/:token/:id', checkLogin.verifyTeacher, checkLogin.phanquyen, studentController.deleteStudent)

module.exports = router