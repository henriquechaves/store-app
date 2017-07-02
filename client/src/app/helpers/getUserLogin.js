import axios from 'axios'

import _ from 'underscore'

export const getUserLogin = (email, pass, handleLogin, validationFunction) => {
  const URL_POST_LOGIN = 'http://henriquechaves2.getsandbox.com/user/login'
  const URL_POST_USER = 'http://henriquechaves2.getsandbox.com/users'
  const URL_PARAMS_LOGIN = {
    email: email,
    password: pass
  }
  const request = axios.post(URL_POST_LOGIN, URL_PARAMS_LOGIN)


  request
    .then((response) => {
      axios.get(URL_POST_USER)
      .then((res) => {
        return _.map(res.data, (user) => {
          return user.token === response.data.token
          ? handleLogin(user)
          : false
        })
      })
    })
    .catch((err) => {
      const messageError = {
        message: 'Usuario ou senha incorreto(s).',
        type: 'error',
        bool: true
      }
      return err
      ? validationFunction(messageError)
      : false
    })
}
