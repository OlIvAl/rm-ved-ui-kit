import React from "react";
import Button from "@material-ui/core/Button";
import { roundedTheme } from "../../theme";
import { ThemeProvider } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

export const RoundedButtons = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={roundedTheme}>
      <div className={classes.root}>
        <Typography paragraph>Rounded buttons</Typography>
        <div>
          <Button color="primary" variant="outlined">
            Primary
          </Button>
        </div>
        <div>
          <Button color="secondary" variant="outlined">
            Secondary
          </Button>
        </div>
        <div>
          <Button disabled variant="outlined">
            Disabled
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};
