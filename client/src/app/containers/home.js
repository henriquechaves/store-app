import React, { Component } from 'react'

import { Container } from 'semantic-ui-react'

import Header from '../components/header'

import ListProducts from '../components/listProducts'

import { connect } from 'react-redux'

import { browserHistory } from 'react-router'

import { getProducts } from '../helpers/getProducts'

import { fetchProducts } from '../actions'

class Home extends Component {
  componentWillMount(){
    const { fetchProducts } = this.props
    getProducts(fetchProducts)
  }

  componentDidUpdate(){
    return this.props.isLogged !== true
    ? browserHistory.replace('/')
    : false
  }
  render() {
    const { products, user, fetchProducts } = this.props
    return (
      <div>
        <Container fluid>
          <Header
            activeMenu='mercado'
            headerText='Todos os Produtos'
          />
          <ListProducts
            align='middle'
            size='tiny'
            floated='right'
            affiliated='Afiliado'
            products={products}
            user={user}
            getProducts={getProducts}
            fetchProducts={fetchProducts}
          />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    user: state.login.user,
    isLogged: state.login.isLogged
  }
}

export default connect(mapStateToProps, { fetchProducts })(Home)
