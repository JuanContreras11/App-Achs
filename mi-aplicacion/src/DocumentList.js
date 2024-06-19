import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get('https://TU_URL_DE_BACKEND/api/documents');
        setDocuments(response.data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div>
      <h2>Lista de Documentos</h2>
      <ul>
        {documents.map(doc => (
          <li key={doc._id}>
            <h3>{doc.title}</h3>
            <p>{doc.description}</p>
            <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer">Ver Documento</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
