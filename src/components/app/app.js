import React from "react";
import "./app.scss";
import Header from "../header/header";
import Pokedex from "../pokedex/pokedex";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Pokedex></Pokedex>
    </div>
  );
}

export default App;
