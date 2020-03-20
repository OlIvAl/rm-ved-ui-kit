import React from "react";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { InputAdornment } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { roundedTheme } from "../../theme";

export default {
  title: "Inputs",
  component: OutlinedInput
};

const SearchIcon = withStyles({
  root: {
    color: "rgb(120,122,126)",
    pointerEvents: "none"
  }
})(SearchOutlinedIcon);

export const RoundedInputs = () => {
  return (
    <ThemeProvider theme={roundedTheme}>
      <OutlinedInput color="primary" placeholder="placeholder" />
      <OutlinedInput
        color="primary"
        placeholder="search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        }
      />
    </ThemeProvider>
  );
};
