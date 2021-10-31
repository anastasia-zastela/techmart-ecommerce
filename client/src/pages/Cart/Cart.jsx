import React from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import CartItem from './CartItem';
import img from '../iphone12.jpg'
import {
    Button,
    Typography,
    Grid
} from '@material-ui/core';

const Cart = () => {
    const tottalPrice = 68000;
    const classes = useStyles();
    const products = [
                    {id:1,
                        image:img,
                        name:'Iphone 12',
                        category:'телефоны',
                        color:'белый',
                        brand:'Apple',
                        price:34000,},
                    {id:2,
                        image:img,
                        name:'Iphone 12',
                        category:'телефоны',
                        color:'белый',
                        brand:'Apple',
                        price:34000,},
                        {id:3,
                            image:img,
                            name:'Iphone 12',
                            category:'телефоны',
                            color:'белый',
                            brand:'Apple',
                            price:34000,},]

    const cartList = products.map( (product) => <CartItem key={product.id}
                                                    id={product.id}
                                                    image={product.image}
                                                    name={product.name}
                                                    category={product.category}
                                                    color={product.color}
                                                    brand={product.brand}
                                                    price={product.price} /> );
    return(
        <>
            <Typography
                variant='h4'
                color='textPrimary'
                component='p'
                className={classes.cartTitle}
            >
                Корзина
            </Typography>
            <Grid
                container
                className={classes.cartItems}
            >
                <Grid item xs={12} sm={12} md={8}>
                    {cartList}
                </Grid>
                <Grid item xs={12} sm={12} md={4}
                      className={classes.cartButton}
                >
                        <Typography
                            variant='h6'
                            color='textPrimary'
                            component='p'
                            className={classes.cardPrice}
                        >
                            Итого : {tottalPrice} ₴
                        </Typography>
                        <Button
                            className={classes.btnChekout}
                            variant='contained'
                            color='primary'
                        >
                            Оформить заказ
                        </Button>
                </Grid>

            </Grid>
        </>
    )
}

export default Cart;