import { browserHistory } from 'react-router'

import { FETCH_USER_PRODUCTS, EDIT_PRODUCT, ADD_AFILIATION, REMOVE_AFILIATION } from '../constants'

const INITIAL_STATE = {
  products: [],
  itemToEdit: '',
  path: '/MeusProdutos'
}

export default (state = INITIAL_STATE, action) => {
  const handlePath = (path) => {
    return browserHistory.replace(path)
  }
  switch (action.type) {
    case FETCH_USER_PRODUCTS:
      return {
        ...state,
        products: action.items
      };
    case ADD_AFILIATION:
      return {
        ...state,
        path: handlePath('/home')
      };
    case REMOVE_AFILIATION:
      return {
        ...state,
        path: handlePath('/home')
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        itemToEdit: action.product,
        path: handlePath('/EditarProduto')
      };
      default:
      return state;
  }
}
