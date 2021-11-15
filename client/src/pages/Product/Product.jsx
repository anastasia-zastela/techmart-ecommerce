import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Grid,
  Typography,
  Container,
  IconButton,
  Button,
  Box,
} from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';
import useStyles from './styles';
import Slider from '../../components/common/Slider/Slider';
import GarantyIcon from '../../components/icons/GarantyIcon';
import CheckCircleIcon from '../../components/icons/CheckCircleIcon';
import { useActions } from '../../hooks/useActions';
import ProductDetailsTabs from '../../components/common/ProductDetailsTabs';

const phone = {
  memory: [64, 128, 256],
};

const Product = () => {
  const classes = useStyles();
  const { addToCart, listProductDetails, listProductColors } = useActions();
  const location = useLocation();
  const history = useHistory();

  const productId = +location.pathname.match(/[0-9]+/);
  const { product, productColors } = useSelector((state) => state.productDetails);
  const phoneColorArr = productColors.map((prod) => prod.color);

  const changeColor = (color) => {
    const chosenProduct = productColors.find((prod) => prod.color === color);
    history.push(chosenProduct.itemNo);
  };

  const addToCartHandler = (id) => {
    addToCart(id);
  };

  useEffect(() => {
    listProductDetails(productId);
    listProductColors(productId);
  }, []);
  return (
    <Container maxWidth='lg'>
      <Box className={classes.cardWrapper}>
        <Typography variant='h5' className={classes.header}>
          {product.brand}
          {' '}
          {product.name}
          {' '}
          {product.color}
        </Typography>

        <Grid
          container
          justifyContent='space-evenly'
          alignItems='stretch'
          spacing={2}
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            className={(classes.mainSlider, classes.item)}
          >
            <Slider images={product.imageUrls} />
          </Grid>

          <Grid item xs={12} sm={4} md={3} className={classes.item}>
            <Typography variant='body1' className={classes.container}>
              Цвет:
            </Typography>
            <Grid container spacing={2} className={classes.container}>
              {phoneColorArr.map((color, index) => (
                <IconButton
                  onClick={() => changeColor(color)}
                  key={index}
                  variant='outlined'
                  className={classes.coloredBtn}
                  style={{ backgroundColor: color }}
                />
              )) }
            </Grid>
            <Typography variant='body1' className={classes.text}>
              Код товара:
              {product.itemNo}
            </Typography>
            <Typography variant='h4' className={classes.price}>
              {product.currentPrice}
              {' '}
              грн
            </Typography>
            <Button className={classes.productButton} id='buyBtn' onClick={() => addToCartHandler(id)}>
              Купить
            </Button>
          </Grid>

          <Grid item xs={12} sm={12} md={3} className={classes.item}>
            <Typography variant='body1' className={classes.container}>
              Память:
            </Typography>
            <Grid container spacing={2} className={classes.container}>
              {phone.memory.map((memory, index) => (
                <Button
                  key={index}
                  variant='outlined'
                  className={classes.memoryButton}
                >
                  {memory}
                  {' '}
                  Gb
                </Button>
              ))}
            </Grid>
            <Grid container spacing={3} className={classes.text}>
              <GarantyIcon />
              <Typography variant='body1' className={classes.garanty}>
                Гарантия 3 мес.
              </Typography>
            </Grid>
            {product.enabled
              ? (
                <Grid container spacing={3} className={classes.text}>
                  <CheckCircleIcon />
                  <Typography variant='body1' className={classes.exist}>
                    Есть в наличии
                  </Typography>
                </Grid>
              )
              : (
                <Grid container spacing={3} className={classes.text}>
                  <Typography variant='body1' className={classes.noExist}>
                    Нет в наличии
                  </Typography>
                </Grid>
              )}
            <Button
              valiant='outlined'
              className={classes.productButton}
              id='btnBuyInCredit'
              onClick={() => addToCartHandler(id)}
            >
              Купить в кредит
            </Button>
          </Grid>
        </Grid>
      </Box>
      <ProductDetailsTabs />
    </Container>
  );
};

export default Product;
