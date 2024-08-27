import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carrusel from './Components/carrusel.jsx';

function App() {
 
  return (
    <div className="container-fluid px-0">
      <header className='px-0 container-fluid d-grid align-items-end border' style={{ gridTemplateColumns: "1fr 4fr" }}>
        <div className="d-flex">
          <div className="rayita_pequeña"></div>
          <div className="rayita_grande"></div>
        </div>

        <div className='d-flex align-items-center'>
          <h2 className='header-title py-3 text-center'>WELCOME TO OUR GALLERY</h2>
        </div>
      </header>

      <Carrusel />
    </div>
  );
}

export default App;
