import React from "react";
import {
    Grid,
    Typography,
    Link,
    TextField,
    Button
} from "@material-ui/core";
import Logo from "../common/Logo/Logo";
import { useStyles } from './styles';
import { footerLinks } from './consts';


const Footer = () => {
    const classes = useStyles();
    const clickOnFooterEmailInputButton = () => {
        console.log('work');
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
                    <div style={{ marginTop: "30px" }}>
                        {footerLinks.info.map((link, index) => (
                            <Link href="#" className={classes.footerLink} key={index}>
                                {link}
                            </Link>
                        ))}
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography href="#" className={classes.footerTitle}>
                        Категории
                    </Typography>
                    {footerLinks.kategory.map((el, index) => (
                        <Link href="#" className={classes.footerLink} key={index}>
                            {el}
                        </Link>
                    ))}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography href="#" className={classes.footerTitle}>
                        Связаться с нами
                    </Typography>
                    {footerLinks.contacts.map((link, index) => (
                        <Link href="#" className={classes.footerLink} key={index}>
                            {link}
                        </Link>
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
                    <div style={{ position: 'relative' }}>
                        <TextField
                            className={classes.multilineColor}
                            InputProps={{
                                className: classes.multilineColor,
                            }}
                            fullWidth
                            label="email"
                            variant="outlined"
                        />
                        <Button color="inherit" className={classes.footerEmailInputButton} onClick={clickOnFooterEmailInputButton}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 2L11 13" stroke="#A6A6A6" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#A6A6A6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Button>
                    </div>
                    <Typography
                        className={classes.footerTitle}
                        style={{ margin: "30px 0 22px" }}
                    >
                        Мы в соц. сетях:
                    </Typography>
                    <Link href="#" className={classes.linkWrapper}>
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
                    <Link href="#" className={classes.linkWrapper}>
                        <img
                            src="./images/footer/visa.png"
                            alt="visa"
                            style={{ marginBottom: "7px" }}
                        />
                    </Link>
                    <Link href="#" className={classes.linkWrapper}>
                        <img src="./images/footer/master-card.png" alt="master-card" />
                    </Link>
                </Grid>
            </Grid>
        </>
    );
};

export default Footer;
