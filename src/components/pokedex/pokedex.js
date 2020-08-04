import React, { Component } from "react";
import MaterialTable from "material-table";
import "./pokedex.scss";
import ConfirmDialog from "../dialog/dialog"

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
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
        this.setState((prevState) => ({
          rows: [...prevState.rows, pokeData],
        }));
      });
  };

  render() {
    return (
      <div className="container">
        <MaterialTable
          title="Pokedex Table"
          columns={[
            { title: "Number", field: "id" },
            { title: "Name", field: "name" },
            { title: "Type", field: "type" },
            {
              field: "url",
              title: "Preview",
              render: (rowData) => (
                <img
                  src={rowData.sprites.front_default}
                  alt=""
                  style={{ width: 50 }}
                />
              ),
            },
          ]}
          detailPanel={rowData => {
            return (
              <ConfirmDialog
                data={rowData}
                open={true}
                setOpen={true}
              >
              </ConfirmDialog>
            )
          }}
          data={this.state.rows}
          onRowClick={(event, rowData, togglePanel) => togglePanel()}
        />
      </div>
    );
  }
}

export default Pokedex;
