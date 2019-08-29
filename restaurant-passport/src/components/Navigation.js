// Navigation bar
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react';
import Stamps from './Stamps';
import Passport from './Passport';
import Account from './Account';
import Login from './LogIn';
import SignUp from './SignUp';
import { updateExpressionStatement } from 'typescript';

// Navigation Component 

export default class Navigation extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
        return (
        <div className="navigation">
            <Menu pointing secondary>
                <Menu.Menu position='right'>

                    {/* Home */}

                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} href="/" />
                    
                    {/* Passport */}
                    
                    <Menu.Item
                        name='Passport'
                        active={activeItem === 'Passport'}
                        onClick={this.handleItemClick}
                        href="/passport"
                    ></Menu.Item>
                    <Route path="/passport" component={Passport}/>

                    {/* LogIn */}

                    <Menu.Item
                        name='Login'
                        active={activeItem === 'Login'}
                        onClick={this.handleItemClick}
                        href="login"
                    ></Menu.Item>
                    <Route path="/login" component={Login}/>

                    {/* SignUp */}

                    <Menu.Item
                    name='Sign up'
                    active={activeItem === 'Sign up'}
                    onClick={this.handleItemClick}
                    href="/signup"
                    ></Menu.Item>
                    <Route path="/signup" component={SignUp}/>
                </Menu.Menu>`
            </Menu>

        </div>
        )
  };
}