import React from "react";

import Button from "@mui/material/Button";
import StyledMenu from "./styles";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useActions } from "../../../hooks/useActions";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const NestedList = ({ productsList }) => {
  const is768 = useMediaQuery("(max-width: 768px)");
  const [event, setEvent] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { sortByAscending, sortByDescending } = useActions();

  const handleSortByAscending = () => {
    setAnchorEl(null);
    sortByAscending(productsList);
  };
  const handleSortByDescending = () => {
    setAnchorEl(null);
    sortByDescending(productsList);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setEvent(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setEvent(false);
  };

  return (
    <div>
      <Button
        style={is768 ? { fontSize: "10px" } : null}
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        size={is768 ? "small" : "medium"}
      >
        Сортировать по :
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleSortByDescending}
          onChange={(e) => console.log(e.target.value)}
          style={is768 ? { fontSize: "10px", padding: "5px 0 5px 3px" } : null}
          disableRipple
        >
          по возрастанию
        </MenuItem>
        <MenuItem
          onClick={handleSortByAscending}
          onChange={(e) => console.log(e.target.value)}
          style={is768 ? { fontSize: "10px", padding: "5px 0 5px 3px" } : null}
          disableRipple
        >
          по убыванию
        </MenuItem>
      </StyledMenu>
    </div>
  );
};
export default NestedList;
