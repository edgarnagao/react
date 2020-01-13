import React from 'react';
import Header from './comonents/Header';

import CategoriasProvider from '../src/context/CategoriaContext'


function App() {
  return (
    <CategoriasProvider>
      <Header titulo="Evetos API"></Header>
    </CategoriasProvider>
  )
}

export default App;
