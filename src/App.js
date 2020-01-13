import React from 'react';
import Header from './comonents/Header';

import CategoriasProvider from '../src/context/CategoriaContext'
import Formulario from './comonents/Formulario';


function App() {
  return (
    <CategoriasProvider>
      <Header titulo="Evetos API"></Header>

      <div className="uk-container">
          <Formulario/>
      </div>


    </CategoriasProvider>
  )
}

export default App;
