import React, { FC } from "react";
import { Typography } from "@material-ui/core";

interface ITitle {
  className?: string;
}

const Title: FC<ITitle> = props => (
  <Typography className={props.className} variant="h5">
    {props.children}
  </Typography>
);

export default Title;
