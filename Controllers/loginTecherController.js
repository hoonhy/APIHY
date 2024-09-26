const AccountModel = require('../Model/studentModel')
const passport = require('passport');
const jwt = require('jsonwebtoken');
const StudentModel = require('../Model/studentModel');

exports.loginTeacher = async (req, res, next) => {
  try {
    passport.authenticate('local', async (err, user) => {
      if (err) return res.status(500).json('loi server');
      if (!user) return res.status(401).json('username khong ton tai');
      else {
        const token = await jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET);
        res.cookie("token", token, { maxAge: 3600000 });
        return res.json({ token });
      }
    })(req, res, next);
  } catch (error) {
    console.log(error)
    return res.status(500).json('loi server');
  }
};

exports.verifyTeacher = async (req, res, next) => {
  console.log('checklogin ne')
  try {
    var token = req.params.token
    if (!token) {
      return res.status(500).json('Token not available');
    } else {
      var result = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
      const teacher = await StudentModel.findOne({
        _id: result
      })
      if (teacher) {
        req.data = teacher
        next()
      } else {
        res.json('No Permission')
      }
    }
  } catch (error) {
    console.log(error)
    res.status(500).json('Token not available')
  }
};

exports.phanquyen = ( req, res, next) =>{
  var role = req.data.role
  if(role === 'Teacher'){
    next()
  }else{
    res.json('No Permission')
  }
}
