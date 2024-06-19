const express = require('express');
const router = express.Router();
const Document = require('../models/documents');

// Ruta para obtener todos los documentos
router.get('/documents', async (req, res) => {
  try {
    const documents = await Document.find();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los documentos' });
  }
});

// Ruta para crear un nuevo documento
router.post('/documents', async (req, res) => {
  const { title, description, fileUrl } = req.body;
  try {
    const newDocument = new Document({ title, description, fileUrl });
    await newDocument.save();
    res.status(201).json(newDocument);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el documento' });
  }
});

module.exports = router;
