import React, { Component } from "react";
import MaterialTable from "material-table";

class Pokedex extends Component {
  state = { rows: [] };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((allpokemon) => {
        allpokemon.results.forEach((pokemon) => {
          this.createRow(pokemon);
        });
      })
      .catch((err) => console.log(err));
  }

  createRow = (pokemon) => {
    const url = pokemon.url;
    fetch(url)
      .then((response) => response.json())
      .then((pokeData) => {
        console.log(pokeData);
        this.setState((prevState) => ({
          rows: [...prevState.rows, pokeData],
        }));
      });
  };

  render() {
    return (
      <div>
        <MaterialTable
          columns={[
            { title: "Name", field: "name" },
            { title: "Soyadı", field: "surname" },
            { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
            {
              title: "Doğum Yeri",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            },
          ]}
          data={this.state.rows}
          title="Demo Title"
        />
      </div>
    );
  }
}

export default Pokedex;
