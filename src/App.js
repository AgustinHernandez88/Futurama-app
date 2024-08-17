import React from 'react';
import Navbar from './ui/components/Navbar';
import AppRouter from './router/AppRouter';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <div className="app-container">  
      <Navbar />
      <div className="content-wrapper"> 
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
