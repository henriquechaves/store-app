import React, { Component } from 'react'

import { connect } from 'react-redux'

import { browserHistory } from 'react-router'

import { handleValidations, fetchProducts } from '../actions'

import { getProducts } from '../helpers/getProducts'

import Header from '../components/header'
import MyProduct from '../components/myProducts'

class MyProductsContainer extends Component {
  componentDidUpdate(){
    return this.props.isLogged !== true
    ? browserHistory.replace('/')
    : false
  }
  render(){
    const { handleValidations, fetchProducts } = this.props
    return(
      <div>
        <Header
          activeMenu='meusProdutos'
          headerText='Meus Produtos'
        />
        <MyProduct
          validationFunction={handleValidations}
          getProducts={getProducts}
          fetchProducts={fetchProducts}
        />
      </div>
    )
  }
}

const mapStateToProps= (state) => {
  return {
    isLogged: state.login.isLogged
  }
}

export default connect(mapStateToProps, { handleValidations, fetchProducts })(MyProductsContainer)
