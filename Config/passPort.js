var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken')
const StudentModel = require('../Model/studentModel')

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const student = await StudentModel.findOne({
            username: username,
            password: password
        })
        if (!student) {
            console.log('khong co student')
            return done(null, false, ({ message: "Incorrect accounts" }));
        } else {
            console.log('co student')
            return done(null, student);
        }
    } catch (error) {
        console.log(error)
        return done(error);
    }
}))

module.exports = passport 