import React, { FC } from "react";
import { Typography } from "@material-ui/core";

interface ISubtitle {
  className?: string;
}

const Subtitle: FC<ISubtitle> = props => (
  <Typography className={props.className} variant="subtitle1">
    {props.children}
  </Typography>
);

export default Subtitle;
