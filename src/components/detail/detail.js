import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 20,
  },
  media: {
    height: 200,
    backgroundSize: "contain",
  },
  title: {
    textTransform: "capitalize",
  },
});

export default function DetailModal(props) {
  const classes = useStyles();
  const { t } = useTranslation("common");

  console.log(props);

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
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={
                props.data.sprites
                  ? props.data.sprites.other.dream_world.front_default
                  : null
              }
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.title}
              >
                {props.data.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                ID: {props.data.id}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {t("modal.name")}:{" "}
                {props.data.abilities
                  ? props.data.types.map((type) => type.type.name + " ")
                  : null}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {t("modal.weight")}: {props.data.weight / 10} Kg
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {t("modal.height")}: {props.data.height / 10} m
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {t("modal.skills")}:{" "}
                {props.data.abilities
                  ? props.data.abilities.map(
                      (skill) => skill.ability.name + " "
                    )
                  : null}
              </Typography>
              <LinearProgress variant="determinate" {...props} />
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" onClick={handleClose}>
            {t("modal.close")}
            </Button>
          </CardActions>
        </Card>
      </Dialog>
    </div>
  );
}
