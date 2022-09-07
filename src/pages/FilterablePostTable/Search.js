import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function Search({ changeSearch }) {
  const [searchKey, setSearchKey] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    setSearchKey(value);

    if (!value) {
      changeSearch(value);
    }
  };

  const handleClick = (e) => {
    changeSearch(searchKey);
  };

  return (
    <div>
      {/* <TextField
        size="small"
        variant="outlined"
        fullWidth={true}
        label="Search by title"
        
        onChange={handleChange}
      /> */}
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="type your search keywords here..."
          inputProps={{ "aria-label": "search keywords" }}
          value={searchKey}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              changeSearch(searchKey);
            }
          }}
          onChange={(e) => handleChange(e)}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleClick}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
