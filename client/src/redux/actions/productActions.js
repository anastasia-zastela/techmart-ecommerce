import ProductService from '../../services/ProductService';
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

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const products = await ProductService.getAll();

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: products,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const product = await ProductService.getById(id);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductColors = (name) => async (dispatch) => {
  try {
    const products = await ProductService.getAll();
    const productColors = products.filter((prod) => prod.name === name)
    
    console.log(productColors);
    dispatch({
      type: PRODUCT_DETAILS_COLORS,
      payload: productColors,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const sortByAscending = (array) => (dispatch) => {
  const sort = [...array].sort((a, b) => b.price - a.price);
  dispatch({
    type: PRODUCTS_SORT_BY,
    payload: sort,
  });
};

export const sortByDescending = (array) => (dispatch) => {
  const sort = [...array].sort((a, b) => a.price - b.price);
  dispatch({
    type: PRODUCTS_SORT_BY,
    payload: sort,
  });
};
