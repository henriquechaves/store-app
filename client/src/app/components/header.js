import React, { Component } from 'react'
import { Menu, Header } from 'semantic-ui-react'

import { connect } from 'react-redux'

import { Link } from 'react-router'

import { handleLogout } from '../actions'

class HeaderComponent extends Component {
  constructor(props){
    super(props)
    this.state = { activeItem: this.props.activeMenu }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { handleLogout } = this.props
    return (
      <div>
        <Menu pointing inverted secondary size='huge' color='orange'>
          <Link to='/home'><Menu.Item name='mercado' active={activeItem === 'mercado'} onClick={this.handleItemClick} /></Link>
          <Link to='/MeusProdutos'><Menu.Item name='meusProdutos' active={activeItem === 'meusProdutos'} onClick={this.handleItemClick} /></Link>
          {
            this.props.user.type === 'affiliate'
            ? false
            : <Link to='/NovoProduto'><Menu.Item name='adicionarProduto' active={activeItem === 'adicionarProduto'} onClick={this.handleItemClick}/></Link>
          }
          <Menu.Menu position='right'>
            <Menu.Item name={this.props.user.name} active={activeItem === 'userInfo'} onClick={this.handleItemClick} />
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item name='sair' active={activeItem === 'sair'} onClick={handleLogout} />
          </Menu.Menu>
        </Menu>
        <Header as='h3' dividing textAlign='center'>
          {this.props.headerText}
        </Header>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login.user
  }
}

export default connect(mapStateToProps, { handleLogout })(HeaderComponent)
