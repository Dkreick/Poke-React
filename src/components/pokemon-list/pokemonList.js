import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  table: {
    minWidth: 650,
  },
}));

export default function PokemonList({ pokemon }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedPokemon, setselectedPokemon] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpen = (data) => {
    console.log(data);
    setselectedPokemon(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">Preview</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemon.map((pokemon) => (
            <TableRow key={pokemon.name} onClick={() => handleOpen(pokemon)}>
              <TableCell component="th" scope="row">
                {pokemon.id}
              </TableCell>
              <TableCell align="right">{pokemon.name}</TableCell>
              <TableCell align="right">{pokemon.type}</TableCell>
              <TableCell align="right">{pokemon.weight}</TableCell>
              <TableCell align="right">
                <img src={pokemon.sprites.front_default} alt=""></img>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {selectedPokemon.name}
        </DialogTitle>
        <DialogContent>
          {/* <img src={selectedPokemon.sprites.front_default} alt=""></img> */}
          <DialogContentText>{selectedPokemon.name}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}
