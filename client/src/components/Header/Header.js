import React from "react";
import {
    Toolbar,
    AppBar,
    Button,
    TextField
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Logo from "../common/Logo/Logo";
import { useStyles } from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Logo />

                <div>
                    <TextField
                        className={classes.search}
                        InputProps={{
                            className: classes.search,
                        }}
                        label="Поиск"
                        variant="outlined"
                    />
                    <Button className={classes.buttonSearch}>Поиск</Button>
                </div>

                <Button color="inherit">
                    <NavLink to="/cart" className={classes.link}>
                        Cart
                    </NavLink>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
