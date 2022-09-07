import React from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";

export default function DataTable({ rows = [], columns = [], rowname }) {
  return (
    <div className="full-width">
      <DataGridPro
        rows={rows}
        columns={columns}
        autoHeight
        hideFooter={true}
        getRowId={(row) => row[rowname]}
      />
    </div>
  );
}
