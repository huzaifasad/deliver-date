const mongoose = require('mongoose');
require('dotenv').config();

/* ------------------ Connect with MongoDB Cloud------------------------------ */

const connectToMongoDB = async () => {

  ///process.env.MONGODB_URI
  const url='mongodb+srv://huzaifa084567:12345@cluster0.pca5euc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  try {
    const MONGODB_URI = url;
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};

module.exports = connectToMongoDB;
