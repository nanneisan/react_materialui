import React, { useState } from "react";
import Grid from "@mui/material/Grid";

// components
import Search from "./Search";
import PostTable from "./PostTable";

export default function FilterablePostTable() {
  const [searchKey, setSearchKey] = useState("");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} xl={12}>
        <Search changeSearch={(value) => setSearchKey(value)} />
      </Grid>
      <Grid item xs={12} sm={12} xl={12}>
        <PostTable searchKey={searchKey} />
      </Grid>
    </Grid>
  );
}
