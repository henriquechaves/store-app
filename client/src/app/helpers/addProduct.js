import axios from 'axios'

export const addProduct = (name, thumb, price, currency, description, user, validationFunction) => {
    const URL_POST_PRODUCT = 'http://henriquechaves2.getsandbox.com/product'
    const BODY_REQUEST = {
        'owner': user,
        'thumb': thumb,
        'price': {
          'currency': currency,
          'value': price,
        },
        'description': description,
        'affiliates': [],
        'title': name
    }
    const request = axios.post(URL_POST_PRODUCT, BODY_REQUEST)

    request
      .then((response) => {
        const sucesso = {
          message: 'Produto cadastrado com sucesso',
          type: 'success',
          bool: true
        }
        return response.data.status === 'ok'
        ? validationFunction(sucesso)
        : false
      })
      .catch((err) =>{
        const falha = {
          message: 'Erro ao cadastrar produto',
          type: 'error',
          bool: true
        }
        validationFunction(falha)
        console.log(err)
      })
}
