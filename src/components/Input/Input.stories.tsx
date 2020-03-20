import React from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";

export default {
  title: "Inputs",
  component: OutlinedInput
};

export const Inputs = () => {
  return (
    <>
      <OutlinedInput color="primary" placeholder="placeholder" />
      <OutlinedInput color="secondary" />
    </>
  );
};
