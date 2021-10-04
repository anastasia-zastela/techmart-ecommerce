import React from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import CartItem from '../../components/common/CartItem/CartItem';
import img from '../iphone12.jpg'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';

const Cart = () => {
    const tottalPrice = 68000;
    const classes = useStyles();

// const carts = useSelector(state => state.cart.cartItems);
// const renderCartItems = Carts.map(item => <CartItem key props.. />)
// console.log(carts);

return(
<div>
     <h2 className={classes.cartTitle}>Корзина</h2>
     <div className={classes.cartItems}>
     <div>
        <CartItem
        id={1}
        image={img}
        name={'Iphone 12'}
        category={'телефоны'}
        color={'белый'}
        brand={'Apple'}
        price={34000}
    />
    <CartItem
        id={1}
        image={img}
        name={'Iphone 12'}
        category={'телефоны'}
        color={'белый'}
        brand={'Apple'}
        price={34000}
    />
     </div>
   
    
    <div className={classes.cartButton}>
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
    </div>
    </div>
    </div>

)
}

export default Cart;
