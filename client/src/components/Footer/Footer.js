import React from "react";
import {
    Grid,
    Typography,
    Link,
    TextField,
    Button,
    Box
} from "@material-ui/core";
import Logo from "../common/Logo/Logo";
import { useStyles } from './styles';
import { footerLinks } from './consts';
import Vector from '../icons/vector.svg';

const Footer = () => {
    const classes = useStyles();
    const clickOnButtonEmailInput = () => {

    }
    return (
        <>
            <Grid
                container
                spacing={2}
                className={classes.footerFirst}
                style={{ margin: 0, width: '100%' }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Logo />
                    <Box style={{ marginTop: "30px" }}>
                        {footerLinks.info.map((link, index) => (
                            <Link href="/" className={classes.footerLink} key={index}> //* TODO
                                {link}
                            </Link>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Link href="/" className={classes.footerTitle}> //* TODO
                        Категории
                    </Link>
                    {footerLinks.kategory.map((el, index) => (
                        <Link href="/" className={classes.footerLink} key={index}> //* TODO
                            {el}
                        </Link>
                    ))}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className={classes.footerTitle}>
                        Связаться с нами
                    </Typography>
                    {footerLinks.contacts.map((contactPhone, index) => (
                        <Typography className={classes.footerLink} key={index}>
                            {contactPhone}
                        </Typography>
                    ))}
                    {footerLinks.timeToCall.map((link, index) => (
                        <Typography className={classes.footerLink} key={index}>
                            {link}
                        </Typography>
                    ))}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className={classes.footerTitle}>
                        Будьте всегда в курсе наших новостей!
                    </Typography>
                    <Box style={{ position: 'relative' }}>
                        <TextField
                            className={classes.multilineColor}
                            InputProps={{
                                className: classes.multilineColor,
                            }}
                            fullWidth
                            label="email"
                            variant="outlined"
                        />
                        <Button color="inherit" className={classes.footerEmailInputButton} onClick={clickOnButtonEmailInput}>
                            <img src={Vector} alt="vector" />
                        </Button>
                    </Box>
                    <Typography
                        className={classes.footerTitle}
                        style={{ margin: "30px 0 22px" }}
                    >
                        Мы в соц. сетях:
                    </Typography>
                    <Link href="/" className={classes.linkWrapper}> //* TODO
                        <img src="./images/footer/instagram.png" alt="instagram" />
                    </Link>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems="center"
                justify="space-between"
                className={classes.footer}
            >
                <Typography className={classes.text}>
                    © Интернет-магазин TechMart
                </Typography>
                <Grid item className={classes.container}>
                    <Link href="/" className={classes.linkWrapper}> //* TODO
                        <img
                            src="./images/footer/visa.png"
                            alt="visa"
                            style={{ marginBottom: "7px" }}
                        />
                    </Link>
                    <Link href="/" className={classes.linkWrapper}> //* TODO
                        <img src="./images/footer/master-card.png" alt="master-card" />
                    </Link>
                </Grid>
            </Grid>
        </>
    );
};

export default Footer;
