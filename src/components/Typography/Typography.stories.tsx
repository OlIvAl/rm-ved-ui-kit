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
      <Typography>body1 (default)</Typography>
      <Typography variant="caption" display="block">
        caption text
      </Typography>
      <Typography gutterBottom variant="button" display="block">
        button text
      </Typography>
      <div>
        <Typography gutterBottom variant="subtitle1">
          Состояния текста:
        </Typography>
        <Typography>body1 (initial) (default)</Typography>
        <Typography color="primary">body1 (primary)</Typography>
        <Typography color="secondary">body1 (secondary)</Typography>
        <Typography color="textPrimary">body1 (textPrimary)</Typography>
        <Typography color="textSecondary">body1 (textSecondary)</Typography>
        <Typography color="error">body1 (error)</Typography>
        <Typography color="inherit">body1 (inherit)</Typography>
      </div>
    </>
  );
};
