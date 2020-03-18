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
    divider: "rgba(225, 227, 233, 1)",
    text: {
      primary: "rgba(29, 30, 32, 0.87)",
      secondary: "rgba(29, 30, 32, 0.54)",
      disabled: "rgba(29, 30, 32, 0.38)",
      hint: "rgba(29, 30, 32, 0.38)"
    }
  },
  shape: {
    borderRadius: 4
  },
  typography: {
    fontSize: 14,
    htmlFontSize: 18,
    button: {
      textTransform: "none"
    }
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        padding: "6px 12px"
      }
    },
    MuiSelect: {
      outlined: {
        padding: "8px 36px 8px 12px"
      }
    },
    MuiTabs: {
      root: {
        minHeight: 36
      }
    },
    MuiTab: {
      root: {
        minHeight: 36
      }
    }
  }
});
