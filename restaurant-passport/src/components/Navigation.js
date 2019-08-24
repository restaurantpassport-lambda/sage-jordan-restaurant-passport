import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react';
import Stamps from './Stamps';
import Passport from './Passport';
import Account from './Account';
import LogIn from './LogIn';
import SignUp from './SignUp';
import img from '../images/hotpot.jpg';

export default class Navigation extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
        return (
        <div className="navigation">
            <Menu pointing secondary>
                <Menu.Menu position='right'>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} href="/" />
                    <Menu.Item
                        name='Passport'
                        active={activeItem === 'passport'}
                        onClick={this.handleItemClick}
                        href="/passport"
                    ></Menu.Item>
                    <Route path="/passport" component={Passport}/>
                    <Menu.Item 
                        name='Account'
                        active={activeItem === 'account'}
                        onClick={this.handleItemClick}
                        href="/account"
                    ></Menu.Item>
                    <Route path="/account" component={Account}/>
                    <Menu.Item
                        name='LogIn'
                        active={activeItem === 'login'}
                        onClick={this.handleItemClick}
                        href="login"
                    ></Menu.Item>
                    <Route path="/login" component={LogIn}/>
                    <Menu.Item
                    name='Sign Up'
                    active={activeItem === 'signup'}
                    onClick={this.handleItemClick}
                    href="/signup"
                    ></Menu.Item>
                    <Route path="/signup" component={SignUp}/>
                </Menu.Menu>`
            </Menu>

            <Segment>
            <Stamps />
            </Segment>
        </div>
        )
  };
}