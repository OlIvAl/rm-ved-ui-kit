import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Toolbar from "@material-ui/core/Toolbar";
import { createStyles, IconButton, Theme } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

export default {
  title: "Header",
  component: AppBar
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolBar: {
      justifyContent: "flex-end"
    }
  })
);

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default">
      <Toolbar className={classes.toolBar}>
        <IconButton aria-label="exit">
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
