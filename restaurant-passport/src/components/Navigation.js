import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react';
import Stamps from './Stamps';
import Passport from './Passport';
import Account from './Account';
import LogIn from './LogIn';
import SignUp from './SignUp';

export default class Navigation extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
        return (
        <div>
            <Menu pointing secondary>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item
                name='Passport'
                active={activeItem === 'passport'}
                onClick={this.handleItemClick}
            ><Link to="/passport">Passport</Link></Menu.Item>
            <Route path="/passport" component={Passport}/>
            <Menu.Item
                name='Account'
                active={activeItem === 'account'}
                onClick={this.handleItemClick}
            ><Link to="/account">Account</Link></Menu.Item>
            <Route path="/account" component={Account}/>
            <Menu.Menu position='right'>
                <Menu.Item
                name='LogIn'
                active={activeItem === 'login'}
                onClick={this.handleItemClick}
                ><Link to="/login">Login</Link></Menu.Item>
                <Route path="/login" component={LogIn}/>
            </Menu.Menu>
            <Menu.Menu position='right'>
                <Menu.Item
                name='Sign Up'
                active={activeItem === 'signup'}
                onClick={this.handleItemClick}
                ><Link to="/signup">SignUp</Link></Menu.Item>
                <Route path="/signup" component={SignUp}/>
            </Menu.Menu>
            </Menu>

            <Segment>
            <Stamps />
            </Segment>
        </div>
        )
  };
}