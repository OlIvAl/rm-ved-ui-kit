import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../theme";
import OutlinedInput from "@material-ui/core/OutlinedInput";

export default {
  title: "Inputs",
  component: OutlinedInput
};

const useStyles = makeStyles({
  root: {
    marginRight: 24,
    fontSize: 14
  },
  input: {
    padding: "6px 12px"
  }
});

export const Inputs = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <OutlinedInput
        classes={classes}
        color="primary"
        placeholder="placeholder"
      />
      <OutlinedInput classes={classes} color="secondary" />
    </ThemeProvider>
  );
};
