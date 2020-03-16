import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import { theme } from "../../theme";

export default {
  title: "Checkboxes",
  component: Checkbox
};

export const Checkboxes = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Checkbox color="primary" />
        <Checkbox color="secondary" />
        <Checkbox color="default" />
      </div>
      <div>
        <Checkbox size="small" color="primary" />
        <Checkbox size="small" color="secondary" />
        <Checkbox size="small" color="default" />
      </div>
    </ThemeProvider>
  );
};
