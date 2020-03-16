import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { theme } from "../../theme";

export default {
  title: "Inputs",
  component: TextField
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
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.root}>
          <TextField variant="outlined" color="primary" />
          <TextField
            variant="outlined"
            placeholder="outlined primary"
            color="primary"
          />
          <TextField
            variant="outlined"
            placeholder="outlined primary"
            color="primary"
            label="With label"
          />
        </div>
        <div className={classes.root}>
          <TextField
            variant="outlined"
            placeholder="outlined secondary"
            color="secondary"
          />
          <TextField
            variant="outlined"
            placeholder="outlined secondary"
            color="secondary"
            label="With label"
          />
        </div>
        <div className={classes.root}>
          <TextField
            variant="standard"
            placeholder="standard primary"
            color="primary"
          />
          <TextField
            variant="standard"
            placeholder="standard primary"
            color="primary"
            label="With label"
          />
        </div>
        <div className={classes.root}>
          <TextField
            variant="standard"
            placeholder="standard secondary"
            color="secondary"
          />
          <TextField
            variant="standard"
            placeholder="standard secondary"
            color="secondary"
            label="With label"
          />
        </div>
        <div className={classes.root}>
          <TextField
            variant="filled"
            placeholder="filled primary"
            color="primary"
          />
          <TextField
            variant="filled"
            placeholder="filled primary"
            color="primary"
            label="With label"
          />
        </div>
        <div className={classes.root}>
          <TextField
            variant="filled"
            placeholder="filled secondary"
            color="secondary"
          />
          <TextField
            variant="filled"
            placeholder="filled secondary"
            color="secondary"
            label="With label"
          />
        </div>
      </div>
    </ThemeProvider>
  );
};
