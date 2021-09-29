import React from 'react';
import {
  Grid,
  Typography,
  Link,
  TextField,
} from '@material-ui/core';
import Logo from '../common/Logo/Logo.jsx';
import { useStyles } from './styles';
import { footerLinks } from './consts';

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
                // xs={12}
                // sm={6}
                // md={6}
                // spacing={2}
        className={classes.footerFirst}
      >
        <Grid item xs={3}>
          <Logo />
          <div style={{ marginTop: '30px' }}>
            {footerLinks.info.map((link) => (
              <Link href='#' className={classes.footerLink} key={link.join(' ')}>
                {link}
              </Link>
            ))}
          </div>
        </Grid>
        <Grid item xs={3}>
          <Typography href='#' className={classes.footerTitle}>
            Категории
          </Typography>
          {footerLinks.kategory.map((el) => (
            <Link href='#' className={classes.footerLink} key={el.join(' ')}>
              {el}
            </Link>
          ))}
        </Grid>
        <Grid item xs={2}>
          <Typography href='#' className={classes.footerTitle}>
            Связаться с нами
          </Typography>
          {footerLinks.contacts.map((link) => (
            <Link href='#' className={classes.footerLink} key={link.join(' ')}>
              {link}
            </Link>
          ))}
          {footerLinks.timeToCall.map((link) => (
            <Typography className={classes.footerLink} key={link.substring(0, link.indexOf(':'))}>
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
            label='email'
            variant='outlined'
          />
          <Typography
            className={classes.footerTitle}
            style={{ margin: '30px 0 22px' }}
          >
            Мы в соц. сетях:
          </Typography>
          <Link href='#' className={classes.linkWrapper}>
            <img src='./images/footer/instagram.png' alt='instagram' />
          </Link>
        </Grid>
      </Grid>

      <Grid
        container
                // spacing={2}
        alignItems='center'
        justify='space-between'
        className={classes.footer}
      >
        <Typography className={classes.text}>
          © Интернет-магазин TechMart
        </Typography>
        <Grid item className={classes.container}>
          <Link href='#' className={classes.linkWrapper}>
            <img
              src='./images/footer/visa.png'
              alt='visa'
              style={{ marginBottom: '7px' }}
            />
          </Link>
          <Link href='#' className={classes.linkWrapper}>
            <img src='./images/footer/master-card.png' alt='master-card' />
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
