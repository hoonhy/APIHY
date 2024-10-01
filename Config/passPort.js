var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken')
const TeacherModel = require('../Model/teacherModel')

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const teacher  = await TeacherModel.findOne({
            username: username,
            password: password
        })
        console.log(teacher)
        if (!teacher) {
            return done(null, false, ({ message: "Incorrect accounts" }));
        } else {
            return done(null, teacher);
        }
    } catch (error) {
        console.log(error)
        return done(error);
    }
}))

module.exports = passport 