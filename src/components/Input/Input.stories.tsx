import React from "react";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import { theme } from "../../theme";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { InputAdornment } from "@material-ui/core";

export default {
  title: "Inputs",
  component: OutlinedInput
};

const RoundedInput = withStyles({
  root: {
    borderRadius: 16
  }
})(OutlinedInput);

const SearchIcon = withStyles({
  root: {
    color: "rgb(120,122,126)",
    pointerEvents: "none"
  }
})(SearchOutlinedIcon);

export const Inputs = () => {
  return (
    <ThemeProvider theme={theme}>
      <OutlinedInput color="primary" placeholder="placeholder" />
      <RoundedInput color="primary" placeholder="search" />
      <RoundedInput
        color="primary"
        placeholder="search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        }
      />
      <OutlinedInput color="secondary" />
    </ThemeProvider>
  );
};
