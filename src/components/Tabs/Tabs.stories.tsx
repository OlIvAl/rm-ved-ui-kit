import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import { theme } from "../../theme";
import Tab from "@material-ui/core/Tab";

export default {
  title: "Tabs",
  component: Tabs
};

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
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
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
    </ThemeProvider>
  );
};
