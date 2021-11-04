import * as productActions from './productActions';
import * as userActions from './userActions';
import * as cartActions from './cartActions';
import * as adminPageActions from './adminPageActions';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  ...productActions,
  ...userActions,
  ...cartActions,
  ...adminPageActions
};
