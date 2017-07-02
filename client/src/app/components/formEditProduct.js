import React, { Component } from 'react'

import { connect } from 'react-redux'

import { browserHistory } from 'react-router'

import { Form, Input, TextArea, Button, Container, Message } from 'semantic-ui-react'

import { editProductHelper } from '../helpers/editProduct'

import { editProduct } from '../actions'

class FormEditProduct extends Component {
  constructor(props){
    super(props)
    this.state = {
      owner: props.product.owner,
      title: props.product.title,
      thumb: props.product.thumb,
      price: props.product.price.value,
      currency: props.product.price.currency,
      description: props.product.description,
      id: props.product.id
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillMount(){
    const { validationFunction } = this.props
    const initialMessages = []
    validationFunction(initialMessages)
  }
  componentDidUpdate(){
    return this.props.isLogged !== true
    ? browserHistory.replace('/')
    : false
  }

  handleChange(e, { name, value }){
    this.setState({
      [name]: value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    const { title, thumb, price, currency, description, owner, id } = this.state
    const { editProduct, validationFunction } = this.props
    const initialProduct = ''
    editProductHelper(title, thumb, price, currency, description, owner, id, validationFunction)
    editProduct(initialProduct)
  }
  render(){
    const { title, thumb, price, currency, description } = this.state
    const { message } = this.props
    return(
      <div className="formEditProductContainer">
        <Container text>
          <Form
            onSubmit={
              this.handleSubmit
            }
            error
            success
            >
            <Form.Group widths='equal'>
              <Form.Field value={title} name='title' control={Input} label='Nome' placeholder='Nome' onChange={this.handleChange} />
              <Form.Field value={thumb} name='thumb' control={Input} label='Imagem' placeholder='Link da Imagem' onChange={this.handleChange} />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field value={price} name='price' control={Input} label='Valor' placeholder='Digite o valor' onChange={this.handleChange} />
              <Form.Field value={currency} name='currency' control={Input} label='Moeda' placeholder='BRL/USD/...' onChange={this.handleChange} />
            </Form.Group>
              <Form.Field value={description} name='description' control={TextArea} label='Descrição' placeholder='Informações do produto...' onChange={this.handleChange} />
            <Form.Group>
              <Form.Field control={Button} content='Salvar Produto'/>
            </Form.Group>
              {
                message.type === 'success'
                ? <Message
                  success
                  header={message.message}
                />
                : <Message
                  error
                  header={message.message}
                />
              }
          </Form>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    message: state.messages.message,
    isLogged: state.login.isLogged
  }
}

export default connect(mapStateToProps, { editProduct })(FormEditProduct)
