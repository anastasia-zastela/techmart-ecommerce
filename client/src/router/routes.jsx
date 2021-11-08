import React from 'react';
import Admin from '../pages/Admin/';
import Cart from '../pages/Cart';
import Main from '../pages/Main';
import Products from '../pages/Products';
import Product from '../pages/Product';
import Contacts from '../pages/Contacts';
import Checkout from '../pages/Checkout';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';

import {
  ADMIN,
  CART_ROUTE,
  CHECKOUT_ROUTE,
  MAIN_PAGE_ROUTE,
  PRODUCTS_ROUTE,
  CONTACTS_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
} from '../config/consts';

export const privateRoutes = [
  {
    path: CART_ROUTE,
    component: <Cart />,
    exact: true,
    admin: false,
  },
  {
    path: ADMIN,
    component: <Admin/>,
    exact: true,
    admin: true,
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
    path: CONTACTS_ROUTE,
    component: <Contacts/>,
    exact: true,
  },
  {
    path: SIGNUP_ROUTE,
    component: <Signup />,
    exact: true,
  },
  {
    path: SIGNIN_ROUTE,
    component: <Signin/>,
    exact: true,
  },
  {
    path: CART_ROUTE,
    component: <Cart/>,
    exact: true,
  },
];
