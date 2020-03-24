import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default {
  title: "Buttons",
  component: Button
};

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export const Buttons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined" color="primary">
        Outlined
      </Button>
      <Button variant="outlined" color="secondary">
        Outlined
      </Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled={true}>
        Disabled
      </Button>
    </div>
  );
};
