import React, { useCallback, useState } from "react";
import {
    Toolbar,
    Typography,
    Button,
    Menu,
    MenuList,
    MenuItem,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useStyles } from './styles';

const NavBar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = useCallback((e) => {
        setAnchorEl(e.currentTarget);
    }, [setAnchorEl]);

    const handleCloseMenu = useCallback(() => {
        setAnchorEl(null);
    }, [setAnchorEl])

    return (
        <>
            <Toolbar className={classes.NavBar} position="static">
                <Button color="inherit" >
                    <NavLink to="/" className={classes.linkNavBar}>
                        Главная
                    </NavLink>
                </Button>
                <Button
                    aria-controls='menu'
                    onClick={handleOpenMenu}
                    color="inherit"
                >
                    <Typography className={classes.linkNavBar}>
                        Меню
                    </Typography>
                </Button>
                <Button color="inherit">
                    <NavLink to="/signin" className={classes.linkNavBar}>
                        Войти
                    </NavLink>
                </Button>
                <Button color="inherit">
                    <NavLink to="/signup" className={classes.linkNavBar}>
                        Регистрация
                    </NavLink>
                </Button>
                <Button color="inherit">
                    <NavLink to="/signin" className={classes.linkNavBar}>
                        Выйти
                    </NavLink>
                </Button>
            </Toolbar>
            <Menu
                className={classes.menu}
                id='menu'
                onClose={handleCloseMenu}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
            >
                <MenuItem onClick={handleCloseMenu}>
                    <NavLink to="/products" className={classes.menuItem}>
                        Продукты
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                    <NavLink to="/" className={classes.menuItem}>
                        Распродажа
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                    <NavLink to="/" className={classes.menuItem}>
                        Новинки
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                    <NavLink to="/" className={classes.menuItem}>
                        Ближайшие поступления
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                    <NavLink to="/" className={classes.menuItem}>
                        Apple Store
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                    <NavLink to="/" className={classes.menuItem}>
                        Apple Б/У
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                    <NavLink to="/" className={classes.menuItem}>
                        Аудио техника
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                    <NavLink to="/" className={classes.menuItem}>
                        Аксессуары
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                    <NavLink to="/" className={classes.menuItem}>
                        Гаджеты
                    </NavLink>
                </MenuItem>
            </Menu>
        </>
    );
};

export default NavBar;
