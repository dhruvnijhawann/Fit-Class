const mongoose = require('mongoose');
const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost/fitness-class-booking', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1); // Exit the application
    }
  };
  
  module.exports = connectDB;