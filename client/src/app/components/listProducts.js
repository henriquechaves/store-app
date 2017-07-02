import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Item, Container, Label, Loader, Icon } from 'semantic-ui-react'

import './listProducts.css'

import Button from './genericButton'

import { addAfiliation, removeAfiliation } from '../helpers/handleFiliation'

import { addAfiliation as addAction, removeAfiliation as removeAction} from '../actions'

import _ from 'underscore'

class ListProducts extends Component {
  constructor(props){
    super(props)
    this.handleButton = this.handleButton.bind(this)
  }

  handleButton(product, user, add, remove){
    const { addAction, removeAction, getProducts, fetchProducts } = this.props
    return(
      product.affiliates.length > 0
      ? _.map(product.affiliates, (affiliate, key) => {
        return affiliate === user.id
        ? <Button
          key={key}
          float="right"
          color="red"
          textButton="Cancelar"
          token={user.token}
          id={product.id}
          get={getProducts}
          fetch={fetchProducts}
          action={removeAction}
          onClickFunction={remove}
          />
        : <Button
          key={key}
          float="right"
          color="orange"
          textButton='Afiliar'
          token={user.token}
          id={product.id}
          get={getProducts}
          fetch={fetchProducts}
          action={addAction}
          onClickFunction={add}
          />
      })
      : <Button
        float="right"
        color="orange"
        textButton='Afiliar'
        token={user.token}
        id={product.id}
        get={getProducts}
        fetch={fetchProducts}
        action={addAction}
        onClickFunction={add}
        />
    )
  }
  render(){
    const { products, affiliated, user, imageSize, getProducts } = this.props
    return (
      <div className="listProductsContainer">
      <Container>
        {
          products.items.length > 0
          ? <Item.Group divided relaxed>
            {
              _.map(products.items, (product, key) => {
                return (
                <Item key={key}>
                <Item.Image size={imageSize} src={product.thumb} />

                <Item.Content>
                  <Item.Header>{product.title}</Item.Header>
                  <Item.Meta>
                    {
                      product.price.currency
                      ? <span>{`${product.price.currency} ${product.price.value}`}</span>
                      : false
                    }
                  </Item.Meta>
                  <Item.Description>{product.description}</Item.Description>
                  {
                    user.type === 'affiliate'
                    ? _.map(product.affiliates, (aff) =>{
                      return aff === user.id
                      ? <Item.Extra key={product.id}>
                          <Label color='teal' tag size='small'>
                            {affiliated}
                          </Label>
                        </Item.Extra>
                      : false
                    })
                    : false
                  }
                  {
                    user.type === 'producer' && user.id === product.owner
                    ? <Item.Extra>
                      <Icon color='teal' name='check' />
                        {product.affiliates.length}
                        {' '}
                        Afiliados
                    </Item.Extra>
                    : false
                  }
                  <Item.Extra>
                    {this.props.user.type === 'affiliate'
                      ? this.handleButton(product, user, addAfiliation, removeAfiliation, getProducts)
                      : false
                        }
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



export default connect(null, { addAction, removeAction })(ListProducts)
