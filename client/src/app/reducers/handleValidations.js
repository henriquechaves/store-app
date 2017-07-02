import { HANDLE_VALIDATIONS } from '../constants'

const INITIAL_STATE = {
  message: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HANDLE_VALIDATIONS:
      return {
        ...state,
        message: action.message
      };
      default:
      return state;
  }
}
