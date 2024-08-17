import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import CharacterModal from '../components/CharacterModal';
import { useNavigate } from 'react-router-dom'; 
import IphoneFrame from '../components/IphoneFrame'; 
import { RotatingModel3D } from '../components/RotatingModel3D'; 
import './Home.css'; 

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/characters')
      .then(response => setCharacters(response.data))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  const handleOpen = (character) => {
    setSelectedCharacter(character);
    setOpen(true);
    navigate(`/character/${character.id}`); 
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="home-container">
      

      <div className="character-grid">
        {characters.map((character) => (
          <div className="card-item animate__animated animate__fadeInUp" key={character.id} onClick={() => handleOpen(character)}>
            <CharacterCard character={character} />
          </div>
        ))}
      </div>


      <div className="rotating-model-container">
        <RotatingModel3D />
      </div>


      <div className="title-container">
        <h2 className="hiw-title">
          Disfruta más con
          <br /> Futurama.
        </h2>
      </div>


      <div className="iphone-frame-container">
        <IphoneFrame /> 
      </div>

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          open={open}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default Home;
