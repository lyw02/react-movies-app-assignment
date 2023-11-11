import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CardViewIcon from "@mui/icons-material/Apps";
import ListViewIcon from "@mui/icons-material/ViewList";
import Box from "@mui/material/Box";

const ToolBar = ({ viewType, setViewType }) => {
  const handleChange = (event, newViewType) => {
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
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="Card">
          <CardViewIcon />
        </ToggleButton>
        <ToggleButton value="List">
          <ListViewIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ToolBar;
