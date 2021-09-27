import React from 'react';
// import { useActions } from '../../../hooks/useActions';
// import { addToCart, removeFromCart } from '../../../redux/actions/cartActions';
import ProductCard from '../ProductCard/ProductCard';
import { useStyles } from './styles';

const ProductList = ({ products }) => {
  // const { addToCart } = useActions();

  const classes = useStyles();

  // const addToCartHandler = (productId) => {
  //   addToCart(productId);
  // };

  const productsMapped = products.map((product) => (
    <ProductCard
      key={product._id}
      id={product._id}
      name={product.name}
      image={product.image}
      price={product.price}
      color={product.color}
      brand={product.brand}
      category={product.category}
      // addToCartHandler={() => addToCartHandler(product._id)}
    />
  ));

  return (
    <>
      <div className={classes.listWrapper}>{productsMapped}</div>
    </>
  );
};

export default ProductList;
