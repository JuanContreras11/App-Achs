import React, { useState } from 'react';
import axios from 'axios';

const AddDocument = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://TU_URL_DE_BACKEND/api/documents', { title, description, fileUrl });
      setTitle('');
      setDescription('');
      setFileUrl('');
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  return (
    <div>
      <h2>Añadir Documento</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Descripción:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>URL del Archivo:</label>
          <input type="text" value={fileUrl} onChange={(e) => setFileUrl(e.target.value)} />
        </div>
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
};

export default AddDocument;
