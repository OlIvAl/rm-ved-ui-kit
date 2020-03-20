import React from "react";
import Radio from "@material-ui/core/Radio";

export default {
  title: "RadioButtons",
  component: Radio
};

export const RadioButtons = () => {
  return (
    <>
      <Radio color="primary" />
      <Radio color="secondary" />
      <Radio color="default" />
    </>
  );
};
