const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username: String,
    password: String,
    role: String
});

const StudentModel = mongoose.model('accounts', AccountSchema)

module.exports = StudentModel