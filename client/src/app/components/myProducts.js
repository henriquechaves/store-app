import React, { Component } from 'react'

import { connect } from 'react-redux'

import { browserHistory } from 'react-router'

import Afiliated from './afiliatedProducts'

import Productor from './productorProducts'

import { getUserProducts } from '../helpers/getUserProducts'

import { fetchUserProducts, removeAfiliation as removeAction } from '../actions'

class MeusProdutos extends Component {

componentWillMount(){
  const { user, fetchUserProducts } = this.props
  getUserProducts(user.token, fetchUserProducts)
}
componentDidUpdate(){
  return this.props.isLogged !== true
  ? browserHistory.replace('/')
  : false
}

  render(){
    const { products, validationFunction, user, fetchUserProducts, fetchProducts, getProducts, removeAction } = this.props
    return (
      user.type === 'affiliate'
      ? <Afiliated
         imageSize='tiny'
         textButton='Cancelar'
         textLabel='Afiliado'
         action={removeAction}
         getProducts={getProducts}
         fetchProducts={fetchProducts}
         user={user}
        />
      : <Productor
         products={products}
         imageSize='tiny'
         textLabel='Afiliados'
         get={getUserProducts}
         fetch={fetchUserProducts}
         user={user}
         validationFunction={validationFunction}
        />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    products: state.userProducts.products,
    isLogged: state.login.isLogged
  }
}

export default connect(mapStateToProps, { fetchUserProducts, removeAction })(MeusProdutos)
