import React from 'react';
import { useSelector } from "react-redux";
import { useStyles } from './styles';

const CartCounter = () => {
    const classes = useStyles();
    const cartItem = useSelector((state) => state.cart.cartItems);
    const cartCounter = cartItem.reduce((previous, current) => {
        return previous + current.qty;
      }, 0);
      if (cartItem.length > 0) {return (
        <span className={classes.cartCounter}>
        {cartCounter}
        </span>
      )}
      return (
        null
      )
};

export default CartCounter;
