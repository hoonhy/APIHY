const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username: String,
    password: String,
    role: String
});

const TeacherModel = mongoose.model('teachers', AccountSchema)

module.exports = TeacherModel