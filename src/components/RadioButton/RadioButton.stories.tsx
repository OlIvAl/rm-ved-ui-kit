import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import { theme } from "../../theme";

export default {
  title: "RadioButtons",
  component: Radio
};

export const RadioButtons = () => {
  return (
    <ThemeProvider theme={theme}>
      <Radio color="primary" />
      <Radio color="secondary" />
      <Radio color="default" />
    </ThemeProvider>
  );
};
