const express = require('express')
const app = express()
const dotenv = require('dotenv')
const StudentModel = require('./Model/studentModel')
const dbConnect = require('./Config/dbConnect')
const passport = require('./Config/passPort')
const StudentManager = require('./Routes/managerStudent')
const Teacher = require('./Routes/loginTeacher')
const PORT = process.env.PORT_SERVER || 3001
dotenv.config()
dbConnect();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());

app.use('/api/teacher', Teacher)
app.use('/api/studentC', StudentManager)

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})