const express = require('express');
const path = require('path');
const characterRoutes = require('./routes/characterRoutes');
const cors = require('cors');

const app = express();  // Declaración de `app` debería estar aquí

app.use(cors()); // Permite todas las solicitudes CORS
app.use(express.json()); // Middleware para analizar JSON

// Rutas de la API
app.use('/characters', characterRoutes);

// Servir archivos estáticos de React
app.use(express.static(path.join(__dirname, '..', 'build')));

// Manejo de rutas en React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
