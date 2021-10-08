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

const NestedList = ({ productsList , clickk}) => {

 const is768 = useMediaQuery('(max-width: 768px)')

 const [event, setEvent] = useState(false)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const { sortByAscending, sortByDescending } = useActions()
    
    const handleSortByAscending = () =>{
      setAnchorEl(null);
      sortByAscending(productsList)
     }
     const handleSortByDescending = () =>{
      setAnchorEl(null);
      sortByDescending(productsList)
     }

     
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setEvent(true)
    };
    const handleClose = () => {
      setAnchorEl(null);
      setEvent(false)
    };

    return (
      <div >
        <Button
          style={is768? {fontSize: '10px'} : null}
          id="demo-customized-button"
          aria-controls="demo-customized-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="outlined"
          disableElevation
          onClick={handleClick}
          size={is768?  'small' : 'medium'}
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
          <MenuItem  onClick={handleSortByDescending} 
          onChange={e => console.log(e.target.value)}
          style={is768? {fontSize: '10px' , padding: '5px 0 5px 3px'} : null}
          disableRipple>
            по возростанию
          </MenuItem>
          <MenuItem  onClick={handleSortByAscending}
           onChange={e => console.log(e.target.value)}
          style={is768? {fontSize: '10px' , padding: '5px 0 5px 3px'} : null}
          disableRipple>
            по убыванию
          </MenuItem>
        </StyledMenu>
      </div>
    );
}
export default NestedList;