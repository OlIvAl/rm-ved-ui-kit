import React from "react";
import { makeStyles, Theme, withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { InputAdornment } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { roundedTheme } from "../../theme";

export default {
  title: "Inputs",
  component: OutlinedInput
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const SearchIcon = withStyles({
  root: {
    pointerEvents: "none"
  }
})(SearchOutlinedIcon);

export const RoundedInputs = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={roundedTheme}>
      <div className={classes.root}>
        <OutlinedInput color="primary" placeholder="placeholder" />
        <OutlinedInput
          color="primary"
          placeholder="search"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon color="action" fontSize="small" />
            </InputAdornment>
          }
        />
      </div>
    </ThemeProvider>
  );
};
