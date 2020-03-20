import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default {
  title: "Checkboxes",
  component: Checkbox
};

export const Checkboxes = () => {
  return (
    <>
      <div>
        <Checkbox color="primary" />
        <Checkbox color="secondary" />
        <Checkbox color="default" />
      </div>
      <div>
        <Checkbox size="small" color="primary" />
        <Checkbox size="small" color="secondary" />
        <Checkbox size="small" color="default" />
      </div>
    </>
  );
};
