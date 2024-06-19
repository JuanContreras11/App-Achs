const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://user:origami12@cluster0.1yehy0b.mongodb.net/');
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos', error);
    process.exit(1);
  }
};

module.exports = connectDB;
