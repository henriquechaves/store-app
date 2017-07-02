import axios from 'axios'

export const editProductHelper = (name, thumb, price, currency, description, owner, id, validationFunction) => {
  console.log(name, thumb, price, currency, description, owner, id)
    const URL_POST_PRODUCT = 'http://henriquechaves2.getsandbox.com/product'
    const BODY_REQUEST = {
        'owner': owner,
        'thumb': thumb,
        'price': {
          'currency': currency,
          'value': price,
        },
        'description': description,
        'affiliates': [],
        'title': name
    }
    const request = axios.put(`${URL_POST_PRODUCT}/${id}`, BODY_REQUEST)

    request
      .then((response) => {
        const sucesso = {
          message: 'Produto editado com sucesso',
          type: 'success',
          bool: true
        }
        return response.data.status === 'ok'
        ? validationFunction(sucesso)
        : false
      })
      .catch((err) =>{
        const falha = {
          message: 'Erro ao editar produto',
          type: 'error',
          bool: true
        }
        validationFunction(falha)
        console.log(err)
      })
}
