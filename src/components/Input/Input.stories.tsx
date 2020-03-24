import React from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import { makeStyles } from "@material-ui/core/styles";

export default {
  title: "Inputs",
  component: OutlinedInput
};

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export const Inputs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <OutlinedInput color="primary" placeholder="placeholder" />
      <OutlinedInput color="secondary" />
    </div>
  );
};
