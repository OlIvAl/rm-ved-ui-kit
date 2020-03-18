import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../theme";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";

export default {
  title: "Inputs",
  component: OutlinedInput
};

export const Inputs = () => {
  return (
    <ThemeProvider theme={theme}>
      <OutlinedInput color="primary" placeholder="placeholder" />
      <OutlinedInput color="secondary" />
    </ThemeProvider>
  );
};
