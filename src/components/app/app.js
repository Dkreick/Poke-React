import React from 'react';
import './app.scss';
import Header from '../header/header'
import Pokedex from '../pokedex/pokedex'
import Pokedex2 from '../pokedex/pokedex2'

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Pokedex></Pokedex> */}
      <Pokedex2></Pokedex2>
    </div>
  );
}

export default App;
