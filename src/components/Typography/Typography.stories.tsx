import React from "react";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";

export default {
  title: "Typography",
  component: Typography
};

export const Typographys = () => {
  return (
    <>
      <Typography variant="h1">
        h1
        <br />
        Съешь ещё этих мягких французских булок, да выпей же чаю
      </Typography>
      <Divider />
      <Typography variant="h2">
        h2
        <br />
        Съешь ещё этих мягких французских булок, да выпей же чаю
      </Typography>
      <Divider />
      <Typography variant="h3">
        h3
        <br />
        Съешь ещё этих мягких французских булок, да выпей же чаю
      </Typography>
      <Divider />
      <Typography variant="h4">
        h4
        <br />
        Съешь ещё этих мягких французских булок, да выпей же чаю
      </Typography>
      <Divider />
      <Typography variant="h5">
        h5
        <br />
        Съешь ещё этих мягких французских булок, да выпей же чаю
      </Typography>
      <Divider />
      <Typography variant="h6">
        h6
        <br />
        Съешь ещё этих мягких французских булок, да выпей же чаю
      </Typography>
      <Divider />
      <Typography variant="subtitle1">
        subtitle1
        <br />
        Съешь ещё этих мягких французских булок, да выпей же чаю
      </Typography>
      <Divider />
      <Typography variant="subtitle2">
        subtitle2
        <br />
        Съешь ещё этих мягких французских булок, да выпей же чаю
      </Typography>
      <Divider />
      <Typography>
        body1 (default)
        <br />
        Съешь ещё этих мягких французских булок, да выпей же чаю
      </Typography>
      <Divider />
      <Typography variant="caption" display="block">
        caption text
        <br />
        Съешь ещё этих мягких французских булок, да выпей же чаю
      </Typography>
      <Divider />
      <Typography gutterBottom variant="button" display="block">
        button text
        <br />
        Съешь ещё этих мягких французских булок, да выпей же чаю
      </Typography>
      <Divider />
      <div>
        <Typography gutterBottom variant="subtitle1">
          Состояния текста:
        </Typography>
        <Typography>
          body1 (initial) (default)
          <br />
          Съешь ещё этих мягких французских булок, да выпей же чаю
        </Typography>
        <Typography color="primary">
          body1 (primary)
          <br />
          Съешь ещё этих мягких французских булок, да выпей же чаю
        </Typography>
        <Typography color="secondary">
          body1 (secondary)
          <br />
          Съешь ещё этих мягких французских булок, да выпей же чаю
        </Typography>
        <Typography color="textPrimary">
          body1 (textPrimary)
          <br />
          Съешь ещё этих мягких французских булок, да выпей же чаю
        </Typography>
        <Typography color="textSecondary">
          body1 (textSecondary)
          <br />
          Съешь ещё этих мягких французских булок, да выпей же чаю
        </Typography>
        <Typography color="error">
          body1 (error)
          <br />
          Съешь ещё этих мягких французских булок, да выпей же чаю
        </Typography>
        <Typography color="inherit">
          body1 (inherit)
          <br />
          Съешь ещё этих мягких французских булок, да выпей же чаю
        </Typography>
      </div>
    </>
  );
};
