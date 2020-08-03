import React, { Component } from "react";
import MaterialTable from "material-table";
import "./pokedex.scss";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

class Pokedex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      pokemonData: {}
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
            { title: 'Number', field: 'id' },
            { title: 'Name', field: 'name' },
            { title: 'Type', field: 'type' },
            {
              field: 'url',
              title: 'Preview',
              render: rowData => <img src={rowData.sprites.front_default} alt="" style={{ width: 50 }} />
            }
          ]}
          data={this.state.rows}
          onRowClick={rowData => {
            this.setState({ dialogOpen: true});
            this.setState({ currentPokemon: {rowData}});

            console.log(this.state.currentPokemon)
          }}
        />
        <Dialog
          open={this.state.dialogOpen}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle id="draggable-dialog-title">Pokemon Info</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {/* {this.state.currentPokemon} */}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div >
    );
  }
}

export default Pokedex;
