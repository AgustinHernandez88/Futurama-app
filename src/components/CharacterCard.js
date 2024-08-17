import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea, Box } from '@mui/material';

const CharacterCard = ({ character, onClick }) => {
  return (
    <Card sx={{ width: 220, height: 400, margin: 2, backgroundColor: '#2b2b2b', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardActionArea onClick={onClick} sx={{ height: '100%' }}>
        <Box sx={{ padding: '10px', color: 'white', textAlign: 'center' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {character.name.first} {character.name.last}
          </Typography>
        </Box>
        <CardMedia
          component="img"
          height="260"
          image={character.images.main}
          alt={`${character.name.first} ${character.name.last}`}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ padding: '10px', backgroundColor: '#FF6F00', color: 'white', textAlign: 'center', flexGrow: 1 }}>
          <Typography variant="body2">
            Species: {character.species}
          </Typography>
          <Typography variant="body2">
            Gender: {character.gender}
          </Typography>
          <Typography variant="body2">
            Profession: {character.occupation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
