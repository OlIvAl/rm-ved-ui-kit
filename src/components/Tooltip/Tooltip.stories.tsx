import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../theme";
import { Tooltip } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default {
  title: "Tooltips",
  component: Tooltip
};

export const Tooltips = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Tooltip title="Text text text" arrow placement="left">
          <Button>Arrow left</Button>
        </Tooltip>
        <Tooltip title="Text text text" arrow>
          <Button>Arrow bottom</Button>
        </Tooltip>
        <Tooltip title="Text text text" arrow placement="right">
          <Button>Arrow right</Button>
        </Tooltip>
        <Tooltip title="Text text text" arrow placement="left">
          <Button>Arrow left</Button>
        </Tooltip>
      </div>
      <div>
        <Tooltip title="Text text text" arrow placement="top">
          <Button>Arrow top</Button>
        </Tooltip>
      </div>
      <div>
        <Tooltip title="Text text text" arrow placement="top">
          <Button>Arrow top</Button>
        </Tooltip>
      </div>
    </ThemeProvider>
  );
};
