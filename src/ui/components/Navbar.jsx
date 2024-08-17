import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.leftContainer}>
        <Link to="/" style={styles.link}>Inicio</Link>
      </div>
      <div style={styles.logoContainer}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Futurama_1999_logo.svg/640px-Futurama_1999_logo.svg.png" 
          alt="Futurama Logo"
          style={styles.logo}
        />
      </div>
      <div style={styles.rightContainer}>
        <a 
          href="https://www.disneyplus.com/es-cl/series/futurama/4B9X20Pjihaf" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={styles.link}
        >
          Ver Episodios
        </a>
          </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0px',
    backgroundColor: '#000000',
    color: 'white',
    width: '100%',
    margin: 0,
  },
  leftContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    paddingLeft: '0px',
  },
  logoContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '0px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '21px',
    fontFamily: 'Helvetica', 
  },
  logo: {
    height: '80px',
    objectFit: 'contain',
  }
};

export default Navbar;
