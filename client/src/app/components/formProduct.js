import React, { Component } from 'react'

import { connect } from 'react-redux'

import { browserHistory } from 'react-router'

import { Form, Input, TextArea, Button, Container, Message } from 'semantic-ui-react'

import './formProduct.css'

import { addProduct } from '../helpers/addProduct'

class FormProduct extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      thumb: '',
      price: '',
      currency: '',
      description: ''
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
    const { title, thumb, price, currency, description } = this.state
    const { user, validationFunction } = this.props
    addProduct(title, thumb, price, currency, description, user.id, validationFunction)
    this.setState({
      title: '',
      thumb: '',
      price: '',
      currency: '',
      description: ''
    })
  }
  render(){
    const { title, thumb, price, currency, description } = this.state
    const { message } = this.props
    return(
      <div className="formProductContainer">
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
              <Form.Field control={Button} content='Cadastrar Produto'/>
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

export default connect(mapStateToProps)(FormProduct)
