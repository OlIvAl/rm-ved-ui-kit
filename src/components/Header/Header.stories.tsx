import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

export default {
  title: "Header",
  component: AppBar
};

const useStyles = makeStyles({
  toolBar: {
    justifyContent: "flex-end"
  }
});

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default">
      <Toolbar className={classes.toolBar}>
        <Typography variant="subtitle1">Иванов И. И.</Typography>
        <IconButton aria-label="exit">
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
