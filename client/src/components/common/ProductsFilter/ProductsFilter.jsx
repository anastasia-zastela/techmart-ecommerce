import  React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from 'react';
import { useActions } from "../../../hooks/useActions";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right"
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0"
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        )
      }
    }
  }
}));

const NestedList = (props) => {

 const { sortByAscending, sortByDescending } = useActions()

 const is768 = useMediaQuery('(max-width: 768px)')
  
//  const productsList = useSelector(state => state.productList.products)
 const handleSortByAscending = () =>{
  setAnchorEl(null);
  sortByAscending(props.productsList)
 }
 const handleSortByDescending = () =>{
  setAnchorEl(null);
  sortByDescending(props.productsList)
 }

 const [event, setEvent] = useState(false)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setEvent(true)
    };
    const handleClose = () => {
      setAnchorEl(null);
      setEvent(false)
    };
  
    return (
      <div style={  {textAlign:'end', marginBottom:'30px' } }>
        <Button
          style={is768? {fontSize: '10px'} : null}
          id="demo-customized-button"
          aria-controls="demo-customized-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          size={'small'}
        >
          Соортировать по :
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button"
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem  onClick={handleSortByDescending} disableRipple>
            по возростанию
          </MenuItem>
          <MenuItem  onClick={handleSortByAscending} disableRipple>
            по убыванию
          </MenuItem>
        </StyledMenu>
      </div>
    );
}
export default NestedList;