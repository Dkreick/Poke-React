import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import Switch from '@material-ui/core/Switch';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: "#CC0000",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [isSpanish, setState] = React.useState(true);
  const { t } = useTranslation("common");

  const handleChange = (event) => {
    setState(!isSpanish);
    if(isSpanish){
      i18next.changeLanguage('es');
    } else {
      i18next.changeLanguage('en');
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            {t("layout.title")}
          </Typography>
          <Switch
        checked={isSpanish}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
        </Toolbar>
      </AppBar>
    </div>
  );
}
