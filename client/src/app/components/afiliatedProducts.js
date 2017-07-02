import React, { Component } from 'react'

import { connect } from 'react-redux'

import _ from 'underscore'

import { Item, Container, Label, Loader } from 'semantic-ui-react'

import './afiliatedProducts.css'

import Button from './genericButton'

import { removeAfiliation } from '../helpers/handleFiliation'

class AfiliatedProducts extends Component {
  render(){
    const { products, textLabel, textButton, imageSize, user, getProducts, fetchProducts, action } = this.props
    return(
      <div className="afiliatedProductsContainer">
        <Container>
          {
            products.length > 0
            ? <Item.Group divided relaxed>
              {
                _.map(products, (product, key) => {
                  return _.map(product.affiliates, (affiliate) => {
                    return affiliate === user.id
                    ? <Item key={key}>
                    <Item.Image size={imageSize} src={product.thumb} />

                    <Item.Content>
                      <Item.Header>
                        {product.title}
                        {' '}
                        <Label color='teal' tag size='tiny'>{textLabel}</Label>
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
                        <Button
                          float="right"
                          color="red"
                          textButton={textButton}
                          token={user.token}
                          id={product.id}
                          get={getProducts}
                          fetch={fetchProducts}
                          action={action}
                          onClickFunction={removeAfiliation}
                          />
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                    : false
                  })
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

const mapStateToProps = (state) => {
  return {
    products: state.products.items
  }
}

export default connect(mapStateToProps)(AfiliatedProducts)
