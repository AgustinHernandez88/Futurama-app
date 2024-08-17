import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'animate.css';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/characters/${id}`)
      .then(response => setCharacter(response.data))
      .catch(error => console.error('Error fetching character:', error));
  }, [id]);

  if (!character) return <div>Loading...</div>;

  const handleClose = () => {
    navigate(-1); 
  };

  return (
    <div className="animate__animated animate__backInLeft" style={{ position: 'relative', padding: '20px' }}>
      <button 
        onClick={handleClose} 
        className="close-button"
        aria-label="Cerrar"
      >
        &times;
      </button>
      <h1>{character.name.first} {character.name.last}</h1>
      <img src={character.images.main} alt={character.name.first} />
      {/* Renderiza más información del personaje aquí */}
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Occupation: {character.occupation}</p>
    </div>
  );
};

export default CharacterDetail;
