import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { Backdrop } from "@material-ui/core";

export default {
  title: "PreLoaders",
  component: CircularProgress
};

const useStyles = makeStyles({
  backdrop: {
    backgroundColor: "rgba(255, 255, 255, 0.5);"
  }
});

export const CircularLoader = () => {
  const classes = useStyles();

  return (
    <Backdrop
      data-testid="backdrop-circular-loader"
      className={classes.backdrop}
      open={true}
      transitionDuration={200}
    >
      <CircularProgress />
    </Backdrop>
  );
};
