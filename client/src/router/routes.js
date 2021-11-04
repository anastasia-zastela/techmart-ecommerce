import Cart from '../pages/Cart/Cart.js';
import Main from '../pages/Main/Main';
import Admin from '../pages/Admin';
import Products from '../pages/Products/Products';
import Product from '../pages/Product/Product';
import Auth from '../pages/Admin/Auth';
import {
  ADMIN_ROUTE,
  CART_ROUTE,
  CHECKOUT_ROUTE,
  MAIN_PAGE_ROUTE,
  PRODUCTS_ROUTE, SIGNIN_ADMIN_ROUTE,
  SIGNUP_ROUTE,
} from '../config/consts';
import Checkout from '../pages/Checkout/Checkout';
import Signup from '../pages/Signup/Signup';


export const privateRoutes = [
  {
    path: CART_ROUTE,
    component: <Cart />,
    exact: true,
    admin: false
  },
  {
    path: ADMIN_ROUTE,
    component: <Admin />,
    exact: true,
    admin: true
  },
  {
    path: SIGNIN_ADMIN_ROUTE,
    component: <Auth/>,
    exact: true,
    admin: false
  },
  {
    path: CHECKOUT_ROUTE,
    component: <Checkout />,
    exact: true,
    admin: false,
  },
];

export const publicRoutes = [
  {
    path: MAIN_PAGE_ROUTE,
    component: <Main />,
    exact: true,
  },
  {
    path: `${PRODUCTS_ROUTE}/:id`,
    component: <Product />,
    exact: true,
  },
  {
    path: PRODUCTS_ROUTE,
    component: <Products />,
    exact: true,
  },
  {
    path: SIGNUP_ROUTE,
    component: <Signup />,
    exact: true,
  },
];
