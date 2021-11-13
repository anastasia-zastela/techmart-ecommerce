import React, { useState, useEffect } from "react";
import { Typography } from '@material-ui/core';
import ProductList from '../../components/common/ProductList/ProductList';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { useActions } from "../../hooks/useActions";
import Loader from '../../components/common/Loader'

const Main = () => {
    const { listProductsFiltered } = useActions();
    const productsList = useSelector((state) => state.productList.filteredProducts);
    const loading = useSelector((state) => state.productList.loading);
    const classes = useStyles();

    useEffect(() => {
        listProductsFiltered();
    }, []);

    if (loading) return <Loader />;

    return (
        <>
            {productsList.length < 1 ? <Typography variant='h4' className={classes.pageTitle}>
                Нет товаров
            </Typography>
                : <>
                    <Typography variant='h4' className={classes.pageTitle}>
                        Популярные товары
                    </Typography>

                    <ProductList products={productsList.slice(0, 10)} />
                </>
            }

        </>
    );
};

export default Main;
