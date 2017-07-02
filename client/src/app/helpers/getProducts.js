import axios from 'axios'

export const getProducts = (fetchProducts) => {
  const URL_GET = 'http://henriquechaves2.getsandbox.com/products'
  const request = axios.get(URL_GET)

  return request
    .then((response) => {
      fetchProducts(response.data)
    })
    .catch((error) => {
      throw error
    })
}
