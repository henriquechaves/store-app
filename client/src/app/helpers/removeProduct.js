import axios from 'axios'

export const removeProduct = (product, getProducts, fetchProducts, token) => {
  console.log(product, getProducts, fetchProducts, token)
    const URL_POST_PRODUCT = 'http://henriquechaves2.getsandbox.com/product'
    const request = axios.delete(`${URL_POST_PRODUCT}/${product.id}`)

    request
      .then((response) => {
        getProducts(token, fetchProducts)
      })
      .catch((err) =>{
        getProducts(token, fetchProducts)
        console.log(err)
      })
}
