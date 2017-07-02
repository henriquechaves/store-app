import { FETCH_PRODUCTS } from '../constants'

const INITIAL_STATE = {
  items: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.items
      };
      default:
      return state;
  }
}
