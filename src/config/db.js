const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('DB Connected 💨');
  } catch (error) {
    console.log('Error connecting to database 💥');
  }
};

module.exports = { connectDB };