const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const apiRoutes = require('./routes/api');
const connectDB = require('./models/db');

connectDB(); // Conectar a la base de datos

app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
