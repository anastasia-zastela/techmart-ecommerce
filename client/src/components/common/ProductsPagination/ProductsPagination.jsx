import React from "react";
import Pagination from "@mui/material/Pagination";
import { useStyles } from "./styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function PaginationControlled({ page, count, handleChange }) {
  const classes = useStyles();
  const is768 = useMediaQuery("(max-width: 768px)");

  return (
    <div className={classes.paginationStyle}>
      <Pagination
        className={classes.paginationStyle}
        defaultPage={page}
        count={count}
        color="primary"
        shape="rounded"
        size={is768 ? "small" : "large"}
        showFirstButton={true}
        showLastButton={true}
        onChange={handleChange}
      />
    </div>
  );
}
