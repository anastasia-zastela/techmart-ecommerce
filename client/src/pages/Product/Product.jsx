import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Box, Button, Container, Grid, Typography,
} from '@material-ui/core';
import BlockIcon from '@mui/icons-material/Block';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';
import GarantyIcon from '../../components/icons/GarantyIcon';
import CheckCircleIcon from '../../components/icons/CheckCircleIcon';
import { useActions } from '../../hooks/useActions';
import ProductDetailsTabs from '../../components/common/ProductDetailsTabs';
import ProductPhotos from './ProductPhotos';
import Loader from '../../components/common/Loader';
import Slider from '../../components/common/Slider/Slider.jsx';

// const productId = 53908;

const Product = () => {
  const classes = useStyles();
  const { addToCart, listProductDetails } = useActions();
  const location = useLocation()

  const productId = +location.pathname.match(/[0-9]+/);
  const { product, loading, error } = useSelector((state) => state.productDetails);
  const productLoaded = !loading && !error;

  const addToCartHandler = useCallback(() => {
    addToCart(productId);
  }, [addToCart, productId]);

  useEffect(() => {
    listProductDetails(productId);
  }, [productId]);

  if (!productLoaded) {
    return (
      <Box className={classes.cardWrapper}>
          <Loader />
      </Box>
    );
  }

  return (
    <Container maxWidth='lg'>
      <Box className={classes.cardWrapper}>
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
            className={classes.productPhotosSection}
          >
            <ProductPhotos
              className={classes.productPhotos}
              images={product.imageUrls}
              productName={product.name}
            />
          </Grid>
          <Grid justify='center' item xs={12} sm={4} md={6} className={classes.productInfoSection}>
            <Typography variant='h2' className={classes.productName}>
              {`${product.brand} ${product.name} ${product.color}`}
            </Typography>
            <Typography variant='body1' className={classes.text}>
              {`Код товара: ${product.itemNo}`}
            </Typography>
            <Grid container  className={classes.badges}>
              <div className={classes.badge}>
                <GarantyIcon />
              <Typography variant='body1' className={classes.garanty}>
                Гарантия 3 мес.
              </Typography>
              </div>
              {product.enabled
                ? (
                  <div className={classes.badge}>
                    <CheckCircleIcon className={classes.exist} />
                    <Typography variant='body1' className={classes.exist}>
                      Есть в наличии
                    </Typography>
                  </div>
                )
                : (
                  <div className={classes.badge}>
                    <BlockIcon />
                    <Typography variant='body1' className={classes.noExist}>
                      Нет в наличии
                    </Typography>
                  </div>
                )}
            </Grid>
            <Typography variant='h4' className={classes.price}>
              {`Цена: ${product.currentPrice} грн`}
            </Typography>
            <Button className={classes.productButton} id='buyBtn' onClick={addToCartHandler}>
              Купить
            </Button>
          </Grid>
        </Grid>
      </Box>
      <ProductDetailsTabs />
    </Container>
  );
};

export default Product;
