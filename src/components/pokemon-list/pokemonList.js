import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTranslation } from "react-i18next";
import DetailModal from "../detail/detail"

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "-webkit-center",
  },
  table: {
    marginTop: "30px",
    width: "50%",
  },
  name: {
    textTransform: "capitalize"
  }
}));

export default function PokemonList({ pokemon }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedPokemon, setselectedPokemon] = React.useState(false);
  const { t } = useTranslation("common");

  const handleOpen = (data) => {
    setselectedPokemon(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">{t("table.name")}</TableCell>
            <TableCell align="center">{t("table.type")}</TableCell>
            <TableCell align="center">{t("table.weight")}</TableCell>
            <TableCell align="center">{t("table.preview")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemon.map((pokemon) => (
            <TableRow key={pokemon.name} onClick={() => handleOpen(pokemon)}>
              <TableCell component="th" scope="row">
                {pokemon.id}
              </TableCell>
              <TableCell className={classes.name} align="center">{pokemon.name}</TableCell>
              <TableCell className={classes.name} align="center">{pokemon.types.map((type) => type.type.name + " ")}</TableCell>
              <TableCell align="center">{pokemon.weight / 10} Kg</TableCell>
              <TableCell align="center">
                <img src={pokemon.sprites.front_default} alt=""></img>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DetailModal open={open} onChange={handleClose} data={selectedPokemon}/>
    </div>
  );
}
