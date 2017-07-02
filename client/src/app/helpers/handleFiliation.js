import axios from 'axios'

const URL_PUT = 'http://henriquechaves2.getsandbox.com/product/affiliate/'

export const addAfiliation = (token, id, addAction, get, fetch) => {
  return(
    axios({
      url: `${URL_PUT}${id}/add`,
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        token: token
      }
    })
    .then((response) => {
      get(fetch)
      return response.data.status === 'ok'
      ? addAction()
      : false
    })
  )
}

export const removeAfiliation = (token, id, removeAction, get, fetch) => {
  return(
    axios({
      url: `${URL_PUT}${id}/remove`,
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        token: token
      }
    })
    .then((response) => {
      get(fetch)
      return response.data.status === 'ok'
      ? removeAction()
      : false
    })
  )
}
