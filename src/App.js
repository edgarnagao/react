import React from 'react';
import Header from './comonents/Header';

import CategoriasProvider from '../src/context/CategoriaContext'
import Formulario from './comonents/Formulario';
import EventosProvider from './context/EventosContext';


function App() {
  return (
    
    <EventosProvider>
      <CategoriasProvider>
        <Header titulo="Evetos API"></Header>

        <div className="uk-container">
            <Formulario/>
        </div>


      </CategoriasProvider>
    </EventosProvider>
    
  )
}

export default App;
