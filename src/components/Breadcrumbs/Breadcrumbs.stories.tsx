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
        Material-UI
      </Link>
      <Link color="primary" href="#">
        Core
      </Link>
      <Link color="textSecondary" href="#">
        Breadcrumb
      </Link>
    </Breadcrumbs>
  );
};
