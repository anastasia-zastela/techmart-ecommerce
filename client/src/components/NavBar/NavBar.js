import React from 'react';
import {
  Toolbar,
  AppBar,
  Typography,
  Button,
  Grid,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';

const NavBar = () => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.NavBar} position='static'>
      <Button color='inherit'>
        <NavLink to='/' className={classes.linkNavBar}>
          Main
        </NavLink>
      </Button>
      <Button color='inherit'>
        <NavLink to='/products' className={classes.linkNavBar}>
          Products
        </NavLink>
      </Button>
      <Button color='inherit'>
        <NavLink to='/signin' className={classes.linkNavBar}>
          Sign In
        </NavLink>
      </Button>
      <Button color='inherit'>
        <NavLink to='/signup' className={classes.linkNavBar}>
          Sign Up
        </NavLink>
      </Button>
      <Button color='inherit'>
        <Typography variant='h7' className={classes.linkNavBar}>
          Log out
        </Typography>
      </Button>
    </Toolbar>
  );
};

export default NavBar;
