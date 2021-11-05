import ProductService from '../../services/ProductService';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (id, qty = 1) => async (dispatch, getState) => {
  const data = await ProductService.getById(id);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.itemNo,
      name: data.name,
      image: data.imageUrls[0],
      price: data.currentPrice,
      countInStock: data.quantity,
      qty,
    },
  });

  localStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cart.cartItems),
  );
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
