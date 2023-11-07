// app.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const User = require('./models/User'); // Importa el modelo de usuario

app.post('/logup', async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });

  if (existingUser) {
    return res.status(400).json({ message: 'El usuario ya existe' });
  }

  // crear usuario
  const newUser = new User({ username, password });
  await newUser.save();

  res.json({ message: 'Usuario registrado con éxito' });
});

// Ruta para iniciar sesión
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    const user = await User.findOne({ username });
  
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
  
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
  
    const token = jwt.sign({ username }, process.env.SECRET_KEY);
  
    res.json({ token });
  });
  

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
