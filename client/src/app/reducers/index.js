import { combineReducers } from 'redux';

import products from './handleProducts'
import login from './handleUser'
import userProducts from './handleUserProducts'
import messages from './handleValidations'

export default combineReducers({
  products,
  login,
  userProducts,
  messages
});
