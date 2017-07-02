import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Container, Segment, Header, Image, Divider, Button, Form, Input, Label, Message } from 'semantic-ui-react'

import './login.css'

import Logo from '../img/logo.png'

import { getUserLogin } from '../helpers/getUserLogin'
import { handleLogin, handleValidations } from '../actions'

class Login extends Component {
  constructor(props){
    super(props)
    this.state ={
      loading: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLoader = this.handleLoader.bind(this)
  }

  handleLoader(){
    const { loading } = this.state
    this.setState({
      loading: !loading
    })
  }

  handleChange(e, { name, value }){
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e){
     e.preventDefault()
     const { email, senha } = this.state
     const { handleLogin, handleValidations } = this.props
     const handleFetchLogin = new Promise((resolve, reject) => {
       resolve(
         this.handleLoader()
       )
     })
     handleFetchLogin
     .then(() =>{
       getUserLogin(email, senha, handleLogin, handleValidations)
     })
     .then(() => {
       const { handleValidations } = this.props
       const initialMessages = []
       handleValidations(initialMessages)
     })
   }

  render(){
    const { message } = this.props
    const { loading } = this.state
    return(
      <div className="loginContainer">
        <Container text>
          <Container text>
            <Container text>
              <Segment className="loginSegment" color='orange' size='mini' padded>
              <Divider section />
                  <Header as='h2' textAlign='center'>
                    <Image size='small' src={Logo} centered />
                  </Header>
                  <Divider section />
                  <Form
                    size='small'
                    onSubmit={this.handleSubmit}
                    error
                    >
                    <Form.Field>
                      <Label pointing='below' color='orange' size='large'>Email</Label>
                      <Input
                        size='large'
                        type='email'
                        name='email'
                        placeholder='Insira seu email...'
                        onChange={this.handleChange}
                       />
                    </Form.Field>
                    <Form.Field>
                      <Label pointing='below' color='orange' size='large'>Senha</Label>
                      <Input
                        size='large'
                        type='password'
                        name='senha'
                        placeholder='Digite sua senha...'
                        onChange={this.handleChange}
                      />
                    </Form.Field>
                    <Button fluid color='orange' type='submit' loading={loading}>Entrar</Button>
                    {
                      message.type === 'error' && loading === true
                      ? this.handleLoader()
                      : false
                    }
                    {
                      message.type === 'error'
                      ? <Message
                          error
                          header={message.message}
                        />
                      : false
                    }
                  </Form>
              </Segment>
            </Container>
          </Container>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user,
    message: state.messages.message,
  }
}

export default connect(mapStateToProps, { handleLogin, handleValidations })(Login)
