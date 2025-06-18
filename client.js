const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080; // Puedes usar cualquier puerto disponible

// Servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, '')));

// Página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🌐 Servidor corriendo en http://localhost:${PORT}`);
});
