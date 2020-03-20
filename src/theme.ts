import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
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
  },
  typography: {
    body1: {
      fontSize: "0.875rem",
      lineHeight: 1.43
    },
    button: {
      textTransform: "none"
    }
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        height: "1.429em",
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

export const roundedTheme = createMuiTheme({
  ...theme,
  typography: {
    ...theme.typography,
    button: {
      ...theme.typography.button,
      lineHeight: 1.43
    }
  },
  shape: {
    borderRadius: 16
  }
});
