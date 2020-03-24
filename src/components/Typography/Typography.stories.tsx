import React from "react";
import Typography from "@material-ui/core/Typography";

export default {
  title: "Typography",
  component: Typography
};

export const Typographys = () => {
  return (
    <>
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography>body1</Typography>
      <Typography variant="body2">body2</Typography>
      <Typography variant="caption" display="block">
        caption text
      </Typography>
      <Typography variant="button" display="block">
        button text
      </Typography>
    </>
  );
};
