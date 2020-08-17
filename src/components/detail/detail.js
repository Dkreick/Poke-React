import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles({
  root: {
    padding: "10px 20px 30px 20px",
  },
  buttonDiv: {
    textAlign: "right",
  },
  button: {
    color: "red",
    padding: 0,
  },
  header: {
    textAlign: "center",
  },
  image: {
    height: 300,
  },
  title: {
    textTransform: "capitalize",
  },
  text: {
    fontWeight: "bold",
    color: "gray",
    fontSize: "16px",
    marginBottom: 5,
  },
  progressDiv: {
    marginBottom: "5px",
  },
});

export default function DetailModal(props) {
  const classes = useStyles();
  const { t } = useTranslation("common");

  function handleClose(event) {
    props.onChange(event.target.value);
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid container className={classes.root}>
          <Grid item xs={12} className={classes.buttonDiv}>
            <IconButton
              color="primary"
              className={classes.button}
              onClick={handleClose}
            >
              <CancelIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} className={classes.header}>
            <img
              className={classes.image}
              src={
                props.data.sprites
                  ? props.data.sprites.other["official-artwork"].front_default
                  : null
              }

              alt=""
            />
            <Typography
              gutterBottom
              variant="h4"
              component="h2"
              className={classes.title}
            >
              {props.data.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.text} component="p">
              ID: {props.data.id}
            </Typography>
            <Typography variant="h6" className={classes.text} component="p">
              {t("modal.type")}:{" "}
              {props.data.abilities
                ? props.data.types.map((type) => type.type.name + " ")
                : null}
            </Typography>
            <Typography variant="h6" className={classes.text} component="p">
              {t("modal.weight")}: {props.data.weight / 10} Kg
            </Typography>
            <Typography variant="h6" className={classes.text} component="p">
              {t("modal.height")}: {props.data.height / 10} m
            </Typography>
            <Typography variant="h6" className={classes.text} component="p">
              {t("modal.skills")}:{" "}
              {props.data.abilities
                ? props.data.abilities.map((skill) => skill.ability.name + " ")
                : null}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body" color="textSecondary" component="p">
              {props.data.stats
                ? props.data.stats.map((stat) => (
                    <div className={classes.progressDiv}>
                      <Typography
                        variant="body"
                        color="textSecondary"
                        component="p"
                        className={classes.title}
                      >
                        {stat.stat.name}: {stat.base_stat}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={stat.base_stat}
                      />
                    </div>
                  ))
                : null}
            </Typography>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
