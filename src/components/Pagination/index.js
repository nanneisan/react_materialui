import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function TablePagination(props) {
  let { page, count, handlePage } = props;

  return (
    <div className="pagination">
      <Stack spacing={2}>
        <Pagination
          page={page}
          count={count}
          variant="outlined"
          color="primary"
          size="medium"
          onChange={handlePage}
        />
      </Stack>
    </div>
  );
}
