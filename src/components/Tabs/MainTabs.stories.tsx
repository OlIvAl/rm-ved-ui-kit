import React from "react";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default {
  title: "Tabs",
  component: Tabs
};

const CustomTabs = withStyles(theme => ({
  root: {
    display: "inline-flex",
    borderRadius: theme.shape.borderRadius * 6,
    backgroundColor: theme.palette.grey[200]
  },
  indicator: {
    display: "none"
  }
}))(Tabs);

const CustomTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.shape.borderRadius * 6,
      "&:hover:not(.Mui-selected)": {
        backgroundColor: theme.palette.grey[300]
      }
    },
    selected: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.common.black
    }
  })
)((props: StyledTabProps) => <Tab {...props} />);

interface StyledTabProps {
  label: string;
}

export const MainTabs = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (e: React.ChangeEvent<{}>, index: number) => {
    setValue(index);
  };

  return (
    <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
      <CustomTab label="Tab 1" />
      <CustomTab label="Tab 2" />
      <CustomTab label="TabTabTabTabTabTabTab 3" />
    </CustomTabs>
  );
};
