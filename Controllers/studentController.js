const studentModel = require('../Model/studentModel')

exports.getAllStudent = async (req, res) => {
  try {
    const users = await studentModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

exports.createStudent = async (req, res) => {
  var username = req.body.username
  var password = req.body.password
  var role = req.body.role
  try {
    const student = await studentModel.findOne({
      username: username
    });
    if (student) {
      res.json('This accounts has been exits')
    }
    else {
      const studentADD = await studentModel.create({
        username: username,
        password: password,
        role: role
      })
      res.json('Student created successfully');
    }
  } catch (error) {
    res.status(500).json('loi server')
  }
}

exports.updateStudent = async (req, res) => {
  var id = req.params.id;
  var newPassword = req.body.newPassword;
  try {
    const studentUpdate = await studentModel.findByIdAndUpdate(id, {
      password: newPassword
    })
    if (!studentUpdate) {
      return res.status(404).json('Student not found');
    } else {
      return res.json('Student updated successfully');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json('Server error');
  }
}

exports.deleteStudent = async (req, res) => {
  var id = req.params.id;
  try {
    const student = await studentModel.deleteOne({ _id: id });
    if (student.deletedCount === 0) {
      res.status(404).json('Student not found')
    } else {
      res.json('Delete Student Successful')
    }
  } catch (error) {
    res.status(500).json('loi server')
  }
}