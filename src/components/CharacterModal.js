import React from 'react';
import { Modal, Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', 
  gap: '20px',
  justifyItems: 'center',
};

const cardStyle = {
  width: '100%',
  maxWidth: '300px',
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const mediaStyle = {
  objectFit: 'cover',
  height: '200px', 
};

const CharacterModal = ({ characters, open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h4" component="h2" gutterBottom>
          Personajes
        </Typography>
        <Box sx={gridStyle}>
          {characters.map((character) => (
            <Card key={character.id} sx={cardStyle}>
              <CardMedia
                component="img"
                sx={mediaStyle}
                image={character.images.main}
                alt={`${character.name.first} ${character.name.last}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {character.name.first} {character.name.last}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Species: {character.species}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gender: {character.gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Profession: {character.occupation}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default CharacterModal;
