import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid, Typography } from '@material-ui/core';
import ProductList from '../../components/common/ProductList/ProductList';
import ProductCard from '../../components/common/ProductCard/ProductCard';
import img from '../iphone12.jpg';
import { useActions } from '../../hooks/useActions';
import { useStyles } from './styles';
import { products } from './products';

const loading = false;
const error = false;

const Main = () => {
  //   const { listProducts } = useActions();
  //   const { loading, products, error } = useSelector(
  //     (state) => state.productList
  //   );

  //   useEffect(() => {
  //     listProducts();
  //   }, []);

  const classes = useStyles();

  return (
    <>
      <Typography variant='h4' className={classes.pageTitle}>
        Популярные товары
      </Typography>
      {loading ? (
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justify='center'
          className={classes.loadingWrapper}
        >
          <CircularProgress size='10rem' />
        </Grid>
      ) : error ? (
        <Grid>
          <Typography variant='body2' className={classes.errorText}>
            {error}
          </Typography>
        </Grid>
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
};

export default Main;
