import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import Stamps from './Stamps';

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
            />
            <Menu.Item
                name='Account'
                active={activeItem === 'account'}
                onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
                <Menu.Item
                name='LogIn'
                active={activeItem === 'login'}
                onClick={this.handleItemClick}
                />
            </Menu.Menu>
            <Menu.Menu position='right'>
                <Menu.Item
                name='Sign Up'
                active={activeItem === 'signup'}
                onClick={this.handleItemClick}
                />
            </Menu.Menu>
            </Menu>

            <Segment>
            <Stamps />
            </Segment>
        </div>
        )
  };
}