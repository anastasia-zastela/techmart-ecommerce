import React from 'react';
import { Typography } from '@material-ui/core';
import ProductList from '../../components/common/ProductList/ProductList';
import useStyles from './styles';
import { products } from './products';

const Main = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant='h4' className={classes.pageTitle}>
        Популярные товары
      </Typography>
      <ProductList products={products} />
    </>
  );
};

export default Main;
