import axios from 'axios'

export const getUserProducts = (userToken, fetchUserProducts) => {
  const URL_POST = 'http://henriquechaves2.getsandbox.com/myproducts'
  const URL_PARAMS = {
    token: userToken
  }
  const request = axios.get(URL_POST, {
    headers: URL_PARAMS
  })
  request
   .then((response) => {
     fetchUserProducts(response.data)
   })
   .catch((err) => {
     console.log(err)
   })
}
