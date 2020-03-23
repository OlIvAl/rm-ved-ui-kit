import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Toolbar from "@material-ui/core/Toolbar";

export default {
  title: "Header",
  component: AppBar
};

export const Inputs = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <ExitToAppIcon />
      </Toolbar>
    </AppBar>
  );
};
