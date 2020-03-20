import React from "react";
import Pagination from "@material-ui/lab/Pagination";

export default {
  title: "Pagination",
  component: Pagination
};

export const Paginations = () => {
  return (
    <>
      <Pagination count={10} color="primary" />
      <Pagination count={100} color="secondary" />
      <Pagination count={1000} color="primary" />
    </>
  );
};
