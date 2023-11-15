import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CardViewIcon from "@mui/icons-material/Apps";
import ListViewIcon from "@mui/icons-material/ViewList";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const ToolBar = ({ viewType, setViewType, sortBy, setSortBy }) => {

  const handleSortByChange = (event) => {
    const newSortBy = event.target.value;
    if (newSortBy !== sortBy) {
      setSortBy(newSortBy);
    }
  };

  const handleViewTypeChange = (event, newViewType) => {
    if (newViewType !== null) {
      setViewType(newViewType);
    }
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        margin: "10px",
      }}
    >
      <ToggleButtonGroup
        color="secondary"
        value={viewType}
        exclusive
        onChange={handleViewTypeChange}
        aria-label="Platform"
      >
        <ToggleButton value="Card">
          <CardViewIcon />
        </ToggleButton>
        <ToggleButton value="List">
          <ListViewIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="sort-by-label">Sort by</InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by"
          value={sortBy}
          label="Sort by"
          onChange={handleSortByChange}
        >
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="releaseDate">Release Date</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ToolBar;
