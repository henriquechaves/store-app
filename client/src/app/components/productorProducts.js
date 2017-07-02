import React, { Component } from 'react'

import { connect } from 'react-redux'

import { browserHistory } from 'react-router'

import { editProduct } from '../actions'

import { removeProduct } from '../helpers/removeProduct.js'

import _ from 'underscore'

import { Icon, Item, Container, Loader } from 'semantic-ui-react'

import './productorProducts.css'

import ButtonEdit from './editButton'

class ProductorProducts extends Component{
  componentDidUpdate(){
    return this.props.isLogged !== true
    ? browserHistory.replace('/')
    : false
  }
  render(){
    const { products, textLabel, imageSize, editProduct, validationFunction, get, fetch, user } = this.props
    return(
      <div className="listProductsContainer">
        <Container>
          {
            products.length > 0
            ? <Item.Group divided relaxed>
              {
                _.map(products, (product, key) => {
                  return (
                  <Item key={key}>
                  <Item.Image size={imageSize} src={product.thumb} />

                  <Item.Content>
                    <Item.Header>
                      {product.title}
                    </Item.Header>
                    <Item.Meta>
                      {
                        product.price.currency
                        ? <span>{`${product.price.currency} ${product.price.value}`}</span>
                        : false
                      }
                    </Item.Meta>
                    <Item.Description>{product.description}</Item.Description>
                    <Item.Extra>
                      <Icon color='teal' name='check' />
                        {product.affiliates.length}
                        {' '}
                        {textLabel}
                    </Item.Extra>
                    <Item.Extra>
                      <ButtonEdit
                        float="right"
                        color="orange"
                        textButton='Editar'
                        product={product}
                        validationFunction={validationFunction}
                        onClickFunction={editProduct}
                        />
                      <ButtonEdit
                        float="right"
                        color="red"
                        textButton='Excluir'
                        product={product}
                        getProducts={get}
                        fetchProducts={fetch}
                        token={user.token}
                        onClickFunction={removeProduct}
                        />
                    </Item.Extra>
                  </Item.Content>
                </Item>
                  )
                })
              }
        </Item.Group>
            : <Loader active inline='centered'>Buscando produtos...</Loader>
          }

    </Container>
      </div>
    )
  }
}

const mapStateToProps= (state) => {
  return {
    isLogged: state.login.isLogged
  }
}

export default connect(mapStateToProps, { editProduct })(ProductorProducts)
