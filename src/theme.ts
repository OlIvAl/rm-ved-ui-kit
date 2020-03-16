import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    common: {
      black: "#1D1E20"
    },
    primary: {
      main: "#17BB4F",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#C566DA"
    },
    error: {
      main: "#FF0000"
    },
    divider: "rgba(225, 227, 233, 1)"
  },
  shape: {
    borderRadius: 4
  }
});

/*

Кастомизация темы.

Primary color - 17BB4F
Primary contrastText: "#ffffff"
Secondary color - C566DA
Error color - FF0000
Shapes border radius - 4

Grey colors: 797A7E, C3C5CB, E1E3E9, EDEEF3
Text color - 1D1E20
Black - 1D1E20

Typography (Font / size / line):
Roboto Bold / 24 / 32
Roboto Regular / 18 / 28
Roboto Medium / 18 / 28
Roboto Regular / 16 / 20
Roboto Medium/ 16 / 20
Roboto Regular / 14 / 20
Roboto Medium / 14 / 20
Roboto Regular / 12 / 16

 */
