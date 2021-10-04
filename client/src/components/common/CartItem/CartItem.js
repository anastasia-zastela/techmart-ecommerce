import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

const CartItem = ({
    id,
    image,
    name,
    color,
    brand,
    price,
    addToCartHandler,
}) => {
    const classes = useStyles();
    const quantity = 1;
   
    return (

        <Card key={id} className={classes.cardWrapper}>
            <CardMedia
                className={classes.cardMediaWrapper}
                image={image}
                title={name}
            />
            <CardContent className={classes.сardContent}>
                <Typography
                    className={classes.cardTitle}
                    gutterBottom
                    variant='h5'
                    component='h2'
                >   
                    {brand + " " + name + " " + color}
                </Typography>
                <Typography 
                    variant='h6' 
                    color='textPrimary' 
                    component='p'
                    className={classes.cardId}
                >
                    Код товара: {id} 
                </Typography>
                <Typography 
                    variant='h6' 
                    color='textPrimary' 
                    component='p'
                    className={classes.cardPrice}
                >
                    {price} ₴
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    className={classes.cardButton}
                    variant='outlined'
                    color='primary'
                    onClick={addToCartHandler}
                >
                -
                </Button>
                <span className={classes.quantity}>{quantity}</span>
                <Button
                    className={classes.cardButton}
                    variant='outlined'
                    color='primary'
                    onClick={addToCartHandler}
                >
                + 
                </Button>
            </CardActions>
            <CardActions className={classes.cartTotalSum}>
                <Typography 
                    variant='h6' 
                    color='textPrimary' 
                    component='p'
                    className={classes.cardPrice}
                >
                    {price} ₴
                </Typography>
                <Button
                    className={classes.cardButton}
                    variant='text'
                    color='primary'
                    onClick={addToCartHandler}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H5H21" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 11V17" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 11V17" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                
                </Button>
            </CardActions>
        </Card>

    );
};

export default CartItem;
