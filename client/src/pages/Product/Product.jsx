import React from "react";
import {
  Grid,
  Typography,
  Container,
  IconButton,
  Button,
  Box,
} from "@material-ui/core";
import useStyles from "./styles";
import Slider from "../../components/common/Slider/Slider";
import GarantyIcon from "../../components/icons/GarantyIcon";
import CheckCircleIcon from "../../components/icons/CheckCircleIcon";

const phone = {
  colors: ["white", "black", "#215787", "#C7F3BD", "#E70012"],
  memory: [64, 128, 256],
};

const Product = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
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
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            className={(classes.mainSlider, classes.item)}
          >
            <Slider />
          </Grid>

          <Grid item xs={12} sm={4} md={3} className={classes.item}>
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
                />
              ))}
            </Grid>
            <Typography variant="body1" className={classes.text}>
              Код товара: 1234
            </Typography>
            <Typography variant="h5" className={classes.price}>
              31 300 грн
            </Typography>
            <Button className={classes.productButton} id="buyBtn">
              Купить
            </Button>
          </Grid>

          <Grid item xs={12} sm={12} md={3} className={classes.item}>
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
              <GarantyIcon />
              <Typography variant="body1" className={classes.garanty}>
                Гарантия 3 мес.
              </Typography>
            </Grid>
            <Grid container spacing={3} className={classes.text}>
              <CheckCircleIcon />
              <Typography variant="body1" className={classes.exist}>
                Есть в наличии
              </Typography>
            </Grid>
            <Button
              valiant='outlined'
              className={classes.productButton}
              id="btnBuyInCredit"
            >
              Купить в кредит
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default Product;
