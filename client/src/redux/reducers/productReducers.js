import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_COLORS,
  PRODUCTS_SORT_BY,
} from '../constants/productConstants';

import image from '../../pages/iphone12.jpg';
/// Testiong array 
const products = [
  {id: 1 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:34000},
  {id: 2 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:33000},
  {id: 3 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:32000},
  {id: 4 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:31000},
  {id: 5 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:30000},
  {id: 6 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:29000},
  {id: 7 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:28000},
  {id: 8 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:27000},
  {id: 9 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:26000},
  {id: 10 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:25000},
  {id: 11 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:24000},
  {id: 12 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:23000},
  {id: 13 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:22000},
  {id: 14 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:21000},
  {id: 15 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:20000},
  {id: 16 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:19000},
  {id: 17 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:18000},
  {id: 18 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:17000},
  {id: 19 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:16000},
  {id: 20 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:15000},
  {id: 21,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:14000},
  {id: 22 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:13000},
  {id: 23,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:12000},
  {id: 24 ,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:11000},
  {id: 25,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:10000},
  {id: 26,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:9000},
  {id: 27,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:8000},
  {id: 28,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:7000},
  {id: 29,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:6000},
  {id: 30,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:5000},
  {id: 31,image: image,name: 'Iphone 12',category: 'телефоны',color: 'белый',brand: 'Apple',price:4000},
]

export const productListReducer = (state = { products: products }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PRODUCTS_SORT_BY:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {}, productColors: [] }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PRODUCT_DETAILS_COLORS:
      return { ...state, productColors: action.payload };
    default:
      return state;
  }
};
