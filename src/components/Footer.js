import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000000', color: 'white', textAlign: 'center', padding: '20px 0' }}>
      <div style={{ marginBottom: '10px' }}>
        <p className="font-semibold text-gray-400 text-xs">
          Aguante Redbus
        </p>
      </div>

      <div style={{ backgroundColor: '#4B5563', height: '1px', width: '80%', margin: '0 auto 20px auto' }} />

      <div style={{ marginBottom: '20px' }}>
        <p className="font-semibold text-gray-400 text-xs">
          © 2024 Agustín Hernández. Todos los derechos reservados.
        </p>
        <a 
          href="https://github.com/AgustinHernandez88" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-semibold text-gray-400 text-xs"
          style={{ display: 'block', marginTop: '5px' }}
        >
          Mi Github
        </a>
      </div>

      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Futurama_Planet_Express.svg/180px-Futurama_Planet_Express.svg.png"
          alt="Planet Express Logo"
          style={{ height: '70px', margin: '0 auto' }}
        />
      </div>
    </footer>
  );
};

export default Footer;
