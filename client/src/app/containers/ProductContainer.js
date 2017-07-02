import React, { Component } from 'react'

import { connect } from 'react-redux'

import { browserHistory } from 'react-router'

import { handleValidations } from '../actions'

import Header from '../components/header'
import FormProduct from '../components/formProduct'
import FormEditProduct from '../components/formEditProduct'

class ProductContainer extends Component{
  componentDidUpdate(){
    return this.props.isLogged !== true
    ? browserHistory.replace('/')
    : false
  }
  render(){
    const { itemToEdit, handleValidations } = this.props
    return(
          itemToEdit.id
          ? <div>
              <Header
                activeMenu='adicionarProduto'
                headerText='Editar Produto'
              />
              <FormEditProduct
                product={itemToEdit}
                validationFunction={handleValidations}
              />
            </div>
          : <div>
            <Header
            activeMenu='adicionarProduto'
            headerText='Adicionar Produto'
            />
            <FormProduct
              validationFunction={handleValidations}
            />
            </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    itemToEdit: state.userProducts.itemToEdit,
    isLogged: state.login.isLogged
  }
}

export default connect(mapStateToProps, { handleValidations })(ProductContainer)
