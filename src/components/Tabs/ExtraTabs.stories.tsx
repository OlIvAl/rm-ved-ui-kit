import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default {
  title: "Tabs",
  component: Tabs
};

export const ExtraTabs = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (e: React.ChangeEvent<{}>, index: number) => {
    setValue(index);
  };

  return (
    <>
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
    </>
  );
};
