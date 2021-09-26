import React from "react";
import {
  Toolbar,
  AppBar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Logo from "../common/Logo/Logo";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "28px",
    textTransform: "uppercase",
    margin: 0,
    marginLeft: "5px",
    fontFamily: "Rajdhani",
    color: "rgb(62, 192, 221)",
  },
  link: {
    fontSize: "17px",
    textDecoration: "none",
    color: "rgb(62, 192, 221)",
  },
  header: {
    backgroundColor: "rgb(29, 28, 28)",
    padding: "10px 100px",
    marginBottom: "20px",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Logo />
        <Button color="inherit">
          <NavLink to="/" className={classes.link}>
            Main
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/products" className={classes.link}>
            Products
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/cart" className={classes.link}>
            Cart
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/signin" className={classes.link}>
            Sign In
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/signup" className={classes.link}>
            Sign Up
          </NavLink>
        </Button>
        <Button color="inherit">
          <Typography variant="h7" className={classes.link}>
            Log out
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
