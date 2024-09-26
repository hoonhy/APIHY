const mongoose = require('mongoose');

const DBConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_SERVER);
    console.log('Connect to DB successfully');
  } catch (error) {
    console.error('Connect to DB failed', error);
    process.exit(1);
  }
};

module.exports = DBConnect;
