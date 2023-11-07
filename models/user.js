const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true, // El nombre de usuario debe ser único
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
