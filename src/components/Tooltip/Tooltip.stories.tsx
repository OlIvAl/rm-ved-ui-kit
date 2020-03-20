import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default {
  title: "Tooltips",
  component: Tooltip
};

const CustomTooltip = withStyles({
  tooltip: {
    fontSize: 12
  }
})(Tooltip);

export const Tooltips = () => {
  return (
    <>
      <div>
        <CustomTooltip
          title="Text text texttext texttext texttext texttext texttext texttext texttext texttext texttext texttext texttext text"
          arrow
          placement="left"
        >
          <Button>Arrow left</Button>
        </CustomTooltip>
        <CustomTooltip title="Text text text" arrow>
          <Button>Arrow bottom</Button>
        </CustomTooltip>
        <CustomTooltip title="Text text text" arrow placement="right">
          <Button>Arrow right</Button>
        </CustomTooltip>
        <CustomTooltip title="Text text text" arrow placement="left">
          <Button>Arrow left</Button>
        </CustomTooltip>
      </div>
      <div>
        <CustomTooltip title="Text text text" arrow placement="top">
          <Button>Arrow top</Button>
        </CustomTooltip>
      </div>
      <div>
        <CustomTooltip title="Text text text" arrow placement="top">
          <Button>Arrow top</Button>
        </CustomTooltip>
      </div>
    </>
  );
};
