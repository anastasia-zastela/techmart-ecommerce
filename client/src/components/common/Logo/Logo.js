import React from "react";
// import { NavLink } from "react-router-dom";
import { Typography, makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  img: {
    width: 45,
    height: 45,
  },
  title: {
    fontSize: "28px",
    textTransform: "uppercase",
    margin: 0,
    marginLeft: "5px",
    fontFamily: "Rajdhani",
    color: "rgb(62, 192, 221)",
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <Link to="/" className={classes.logo}>
      <img
        alt="logo"
        src="./images/Triangle-Logo.svg"
        className={classes.img}
      />
      <Typography variant="h6" className={classes.title}>
        techmart
      </Typography>
    </Link>
  );
};

export default Logo;
