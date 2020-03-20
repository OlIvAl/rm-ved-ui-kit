import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default {
  title: "PreLoaders",
  component: CircularProgress
};

export const Progress = () => {
  return (
    <>
      <CircularProgress />
      <CircularProgress color="secondary" />
    </>
  );
};
