import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const ProductCard = ({
  id,
  image,
  name,
  category,
  color,
  brand,
  price,
  removeFromCartHandler,
  addToCartHandler,
  cartView = false,
}) => {
  const classes = useStyles();

  return (
    <Card key={id} className={classes.cardWrapper}>
      <Link to={`/products/${id}`} className={classes.cardLink}>
        <CardActionArea>
          <CardMedia
            className={classes.cardMediaWrapper}
            image={image}
            title={name}
          />
          <CardContent>
            <Typography
              className={classes.cardTitle}
              gutterBottom
              variant='h5'
              component='h2'
            >
              {name}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Brand: {brand}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Category: {category}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Color: {color}
            </Typography>
            <Typography variant='h6' color='textPrimary' component='p'>
              Price: {price} ₴
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        {cartView ? (
          <Button
            className={classes.cardButton}
            variant='contained'
            color='primary'
            onClick={removeFromCartHandler}
          >
            Remove from cart
          </Button>
        ) : (
          <Button
            className={classes.cardButton}
            variant='contained'
            color='primary'
            onClick={addToCartHandler}
          >
            Add to cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
