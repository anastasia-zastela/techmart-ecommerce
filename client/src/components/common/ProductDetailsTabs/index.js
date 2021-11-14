import React, { useState } from 'react';
import { Paper } from '@material-ui/core';

import ProductTabs from './Tabs';
import Reviews from './Reviews';

import useStyles from './styles';
import ProductDescription from "./ProductDescription";
import ProductSpecifications from "./ProductSpecifications";

const ProductDetailsTabs = () => {
  const classes = useStyles();

  const [description, setDescription] = useState(true);
  const [specifications, setSpecifications] = useState(false);
  const [reviews, setReviews] = useState(false);

  return (
    <div className={classes.productDetailsWrapper}>
      <Paper>
        <ProductTabs setDescription={setDescription} setSpecifications={setSpecifications} setReviews={setReviews} />
      </Paper>
      <Paper className={classes.descriptions}>
        {description && <Paper><ProductDescription/></Paper>}
        {specifications && <Paper><ProductSpecifications/></Paper>}
        {reviews && <Paper><Reviews/></Paper>}
      </Paper>
    </div>
  );
};
export default ProductDetailsTabs;
