import React, { useState, useEffect } from "react";
import { Typography } from '@material-ui/core';
import ProductList from '../../components/common/ProductList/ProductList';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { useActions } from "../../hooks/useActions";
import Loader from '../../components/common/Loader'

const Main = () => {
    const { listProducts } = useActions();
    const productsList = useSelector((state) => state.productList.products);
    const loading = useSelector((state) => state.productList.loading);
    const classes = useStyles();

    useEffect(() => {
        listProducts();
    }, []);

    if (loading) return <Loader />;

    return (
        <>
            <Typography variant='h4' className={classes.pageTitle}>
                Популярные товары
            </Typography>
            <ProductList products={productsList} />
        </>
    );
};

export default Main;
