import React from "react";
import Button from "@material-ui/core/Button";
import { roundedTheme } from "../../theme";
import { ThemeProvider } from "@material-ui/styles";

export default {
  title: "Buttons",
  component: Button
};

export const RoundedButton = () => {
  return (
    <ThemeProvider theme={roundedTheme}>
      <Button color="primary" variant="outlined">
        Rounded
      </Button>
      <Button color="secondary" variant="outlined">
        Rounded
      </Button>
    </ThemeProvider>
  );
};
