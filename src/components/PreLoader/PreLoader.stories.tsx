import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../theme";
import CircularProgress from "@material-ui/core/CircularProgress";

export default {
  title: "PreLoaders",
  component: CircularProgress
};

export const PreLoaders = () => {
  return (
    <ThemeProvider theme={theme}>
      <CircularProgress />
      <CircularProgress color="secondary" />
    </ThemeProvider>
  );
};
