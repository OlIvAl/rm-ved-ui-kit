import React from "react";
import {
  createStyles,
  Theme,
  ThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { theme } from "../../theme";

export default {
  title: "Tabs",
  component: Tabs
};

const MainTabs = withStyles({
  root: {
    display: "inline-flex",
    borderRadius: theme.shape.borderRadius * 6,
    backgroundColor: "#edeef3"
  },
  indicator: {
    display: "none"
  }
})(Tabs);

const MainTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.shape.borderRadius * 6,
      "&:hover:not(.Mui-selected)": {
        backgroundColor: "#E1E3E9"
      }
    },
    selected: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main
    }
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
}

export const CustomTabs = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (e: React.ChangeEvent<{}>, index: number) => {
    setValue(index);
  };

  return (
    <ThemeProvider theme={theme}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        indicatorColor="primary"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab disableRipple label="Item One" />
        <Tab disableRipple label="Item Two" />
        <Tab disableRipple label="Item Three" />
      </Tabs>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        variant="fullWidth"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      <div>
        <MainTabs
          value={value}
          onChange={handleChange}
          aria-label="ant example"
        >
          <MainTab label="Tab 1" />
          <MainTab label="Tab 2" />
          <MainTab label="TabTabTabTabTabTabTab 3" />
        </MainTabs>
      </div>
    </ThemeProvider>
  );
};
