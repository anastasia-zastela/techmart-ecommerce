import React, { useState } from 'react';
import {useStyles} from './styles'
import ProductsItem from '../../components/common/ProductsItem/index'


import { Container, Grid , Button } from '@material-ui/core';
import NestedList from '../../components/common/ProductsMenu/index'

import { useSelector } from 'react-redux';
import ProductsPagination from '../../components/common/ProductsPagination/index'
import useMediaQuery from '@material-ui/core/useMediaQuery';


const Products = () => {

const styles = useStyles()
const productsList = useSelector(state => state.productList.products)


const is768 = useMediaQuery('(max-width: 768px)')
const is720 = useMediaQuery('(max-width:720px)')

const [perPage, setPerPage] = useState(12)
const [page, setPage] = useState(1);
const [count, setCount] = useState(Math.ceil(productsList.length / perPage))
const handleChange = (event, value) => {
  setPage(value);
}


const renderItems = productsList
  .slice((page - 1) * perPage, page * perPage)
  .map(item => 
    <ProductsItem
    id={item.id}
    item={item}
    image={item.image}
    name={item.name}
    category={item.category}
    color={item.color}
    brand={item.brand}
    price={item.price}
    key={item.id}
    />)
   
 
  return (
    <Container maxWidth='xl'>
      <Grid className={styles.menuStyle} style={!is768? {justifyContent:'end'} : null}>
     {is768? <Button
          style={is768? {fontSize: '10px'} : null}
          id="demo-customized-button"
          aria-controls="demo-customized-menu"
          aria-haspopup="true"
          variant="outlined"
          disableElevation
          size={is768?  'small' : 'medium'}>
          Фильтр:
        </Button> 
      : null
      }
     <NestedList  
     productsList={productsList}
     />
      </Grid>
      <Grid className={styles.productsMainWrapper}>
    <Grid  item sx='1'>
  {!is768 ?
    <div className={styles.testingFilter}>{/* // filter block */}</div> 
    : null
   }
   </Grid>
   <div className={styles.productsItemMainWrapper}>
     <Grid container spacing={2} sx='2' className={is720? styles.producstAdaptive: null} >
       {renderItems}
    </Grid>
    </div>
    </Grid>
    <Grid>
     <ProductsPagination 
     page={page}
     perPage={perPage}
     count={count}
     handleChange={handleChange}
     />
     </Grid>
    </Container>
  )
};

export default Products;
