import {
  FETCH_PRODUCTS,
  USER_LOGIN,
  USER_LOGOUT,
  ADD_AFILIATION,
  REMOVE_AFILIATION,
  FETCH_USER_PRODUCTS,
  EDIT_PRODUCT,
  REMOVE_PRODUCT,
  HANDLE_VALIDATIONS
} from '../constants';

export const fetchProducts = (items) => {
  return {
    type: FETCH_PRODUCTS,
    items
  };
};

export const handleLogin = (user) => {
  return {
    type: USER_LOGIN,
    user
  };
};

export const handleLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const fetchUserProducts = (items) => {
  return {
    type: FETCH_USER_PRODUCTS,
    items
  }
}
export const editProduct = (product) => {
  return {
    type: EDIT_PRODUCT,
    product
  }
}

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    id
  }
}

export const handleValidations = (message) => {
  return {
    type: HANDLE_VALIDATIONS,
    message
  }
}

export const addAfiliation = () => {
  return {
    type: ADD_AFILIATION
  }
}

export const removeAfiliation = () => {
  return {
    type: REMOVE_AFILIATION
  }
}
