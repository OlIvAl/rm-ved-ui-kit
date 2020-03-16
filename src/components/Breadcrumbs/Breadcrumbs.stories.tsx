import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { theme } from "../../theme";

export default {
  title: "Breadcrumbs",
  component: Breadcrumbs
};

export const CustomBreadcrumbs = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};
