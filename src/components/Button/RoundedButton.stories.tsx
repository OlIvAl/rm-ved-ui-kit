import React from "react";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { theme } from "../../theme";

export default {
  title: "Buttons",
  component: Button
};

const RoundedButton = withStyles({
  root: {
    borderRadius: 16,
    lineHeight: 1.45
  }
})(Button);

export const RoundedButtons = () => {
  return (
    <ThemeProvider theme={theme}>
      <RoundedButton color="primary" variant="outlined">
        Rounded
      </RoundedButton>
      <Button variant="outlined">Default outlined</Button>
    </ThemeProvider>
  );
};
