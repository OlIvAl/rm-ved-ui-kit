import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

export default {
  title: "Breadcrumbs",
  component: Breadcrumbs
};

export const Breadcrumb = () => {
  return (
    <Breadcrumbs>
      <Link color="primary" href="#">
        Main
      </Link>
      <Link color="primary" href="#">
        Page
      </Link>
      <Link underline="none" color="textSecondary">
        Disabled
      </Link>
    </Breadcrumbs>
  );
};
