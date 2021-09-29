import React from 'react';
import img from '../iphone12.jpg';
import ProductCard from '../../components/common/ProductCard/ProductCard';

const Main = () => (
  <div>
    <ProductCard
      id={1}
      image={img}
      name='Iphone 12'
      category='телефоны'
      color='белый'
      brand='Apple'
      price={34000}
    />
  </div>
);

export default Main;
