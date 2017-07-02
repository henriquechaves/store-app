import { USER_LOGIN, USER_LOGOUT } from '../constants'

import { browserHistory } from 'react-router'

const INITIAL_STATE = {
  user: [],
  isLogged: false,
  path: '/'
}

export default (state = INITIAL_STATE, action) => {
  const handlePath = (path) => {
    return browserHistory.replace(path)
  }
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.user,
        isLogged: true,
        path: handlePath('home')
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: [],
        isLogged: false,
        path: handlePath('/')
      }
      default:
      return state;
  }
}
