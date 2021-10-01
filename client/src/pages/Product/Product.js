import React from "react";
import {
  Grid,
  Typography,
  Container,
  IconButton,
  Button,
  Box,
} from "@material-ui/core";
import { useStyles } from "./styles";
// import { useLocation } from "react-router";
import Slider from "../../components/common/Slider/Slider";

const phone = {
  colors: ["white", "black", "#215787", "#C7F3BD", "#E70012"],
  memory: [64, 128, 256],
};

const Product = () => {
  const classes = useStyles();
  //useLocation(id)

  return (
    <Container maxidth="lg">
      <Box className={classes.cardWrapper}>
        <Typography variant="h5" className={classes.header}>
          Apple iPhone 12 256 Gb White
        </Typography>

        <Grid
          container
          justifyContent="space-evenly"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item xs={12} sm={5} md={5} className={classes.mainSlider}>
            <Slider />
          </Grid>

          <Grid item xs={12} sm={3} md={3} className={classes.item}>
            <Typography variant="body1" className={classes.container}>
              Цвет:
            </Typography>
            <Grid container spacing={2} className={classes.container}>
              {phone.colors.map((color, index) => (
                <IconButton
                  key={index}
                  variant="outlined"
                  className={classes.coloredBtn}
                  style={{ backgroundColor: color }}
                ></IconButton>
              ))}
            </Grid>
            <Typography variant="body1" className={classes.text}>
              Код товара: 1234
            </Typography>
            <Typography variant="h5" className={classes.price}>
              31 300 грн
            </Typography>
            <Button className={classes.productButton}>Купить</Button>
          </Grid>

          <Grid item xs={12} sm={4} md={4} className={classes.item}>
            <Typography variant="body1" className={classes.container}>
              Память:
            </Typography>
            <Grid container spacing={2} className={classes.container}>
              {phone.memory.map((memory, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  className={classes.memoryButton}
                >
                  {memory} Gb
                </Button>
              ))}
            </Grid>
            <Grid container spacing={3} className={classes.text}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 8L10.0769 16L8 13.6024"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Typography variant="body1" className={classes.garanty}>
                Гарантия 3 мес.
              </Typography>
            </Grid>
            <Grid container spacing={3} className={classes.text}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986"
                  stroke="rgb(87,174,0)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 4L12 14.01L9 11.01"
                  stroke="rgb(87,174,0)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <Typography variant="body1" className={classes.exist}>
                Есть в наличии
              </Typography>
            </Grid>
            <Button outlined className={classes.productButton}>
              Купить в кредит
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default Product;
