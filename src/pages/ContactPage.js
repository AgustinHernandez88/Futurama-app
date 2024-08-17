import React from 'react';
import { Box, Typography } from '@mui/material';

const Contacto = () => {
  return (
    <Box sx={{ padding: '200px' }}>
      <Typography variant="h4" gutterBottom>
        Contacto
      </Typography>
      <Typography variant="body1">
        Nombre: Agustín Hernández Silva
      </Typography>
      <Typography variant="body1">
        Email: agustinhernandez027@gmail.com
      </Typography>
      <Typography variant="body1">
        Teléfono: +56 9 466 53 445
      </Typography>
    </Box>
  );
};

export default Contacto;
