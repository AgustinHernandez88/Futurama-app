import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    
    console.log('Botón de login presionado');
    
    
    navigate('/characters');
  };

  return (
    <div 
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121212',
      }}
    >
      <button
        onClick={handleLogin}
        style={{
          backgroundColor: '#FF6F00',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '50%',
          width: '150px',
          height: '150px',
          fontSize: '18px',
          cursor: 'pointer',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        Bienvenido
      </button>
    </div>
  );
};

export default LoginPage;
