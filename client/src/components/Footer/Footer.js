import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Link,
  TextField,
} from "@material-ui/core";

import Logo from "../common/Logo/Logo";

const footerLinks = {
  info: ["О нас", "Гарантия и возврат", " Оплата и доставка", "Контакты"],
  kategory: [
    "Распродажа",
    "Новинки",
    "Ближайшие поступления",
    " Apple Store",
    "Apple Б/У",
    " Аудио техника",
    "Аксессуары",
    "Гаджеты",
  ],
  contacts: [
    "(063) 453-83-88",
    "(096) 315-94-99",
    "(050) 788-57-22",
    "(057) 761-92-11",
  ],
  timeToCall: ["Будни: 10:00 - 19:00", "Сб: 10:00 - 19:00", " Вс: выходной"],
};
const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "12px",
    color: "rgb(225, 225, 225)",
  },
  container: {
    marginRight: 0,
    textAlign: "right",
  },
  linkWrapper: {
    marginLeft: "15px",
  },
  footerLink: {
    marginTop: "9px",
    fontSize: "14px",
    lineHeight: "19px",
    color: "#FFFFFF",
    display: "block",
  },
  footerTitle: {
    color: "#FFFFFF",
    fontWeight: "bolt",
    fontSize: "18px",
    lineHeight: "25px",
  },
  footer: {
    backgroundColor: "rgb(29, 28, 28)",
    padding: "20px 100px",
  },
  footerFirst: {
    backgroundColor: "#292929;",
    padding: "60px",
  },
  multilineColor: {
    marginTop: "20px",
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiInputLabel-formControl": {
      color: "white",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        // xs={12}
        // sm={6}
        // md={6}
        spacing={2}
        className={classes.footerFirst}
      >
        <Grid item xs={3}>
          <Logo />
          <div style={{ marginTop: "30px" }}>
            {footerLinks.info.map((link, index) => (
              <Link href="#" className={classes.footerLink} key={index}>
                {link}
              </Link>
            ))}
          </div>
        </Grid>
        <Grid item xs={3}>
          <Typography href="#" className={classes.footerTitle}>
            Категории
          </Typography>
          {footerLinks.kategory.map((el, index) => (
            <Link href="#" className={classes.footerLink} key={index}>
              {el}
            </Link>
          ))}
        </Grid>
        <Grid item xs={2}>
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
        <Grid item xs={4}>
          <Typography className={classes.footerTitle}>
            Будьте всегда в курсе наших новостей!
          </Typography>
          <TextField
            className={classes.multilineColor}
            InputProps={{
              className: classes.multilineColor,
            }}
            fullWidth
            label="email"
            variant="outlined"
          />
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
        spacing={2}
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
