/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "./index.css";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const index = ({ handleOnSubmit, disableReset }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleOnChange = (e) => {
    setSearchInput(e.target.value.trim());
  };
  const handleOnClick = () => {
    handleOnSubmit(searchInput);
    setSearchInput("");
  };
  const resetFilter = () => {
    handleOnSubmit("");
  };

  return (
    <div className="search-group-container">
      <Button
        className="reset-btn"
        disabled={disableReset}
        onClick={resetFilter}
        variant="outlined"
      >
        Reset
      </Button>
      <div className="search-group">
        <TextField
          id="outlined-search"
          label=""
          type="search"
          placeholder="Search by keywords"
          size="small"
          value={searchInput}
          onChange={handleOnChange}
        />
        <IconButton onClick={handleOnClick} aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default index;
