// Navigation bar
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';
import Home from './Home';
import Passport from './Passport';
import Login from './LogIn';
import SignUp from './SignUp';

// Navigation Component 

export default class Navigation extends Component {
    state = { activeItem: 'Home' }
  
     handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  

    render() {
      const { activeItem } = this.state
  
        return (
            <div className="pagewrapper">

            
        <div className="navigation">
            <Menu pointing secondary>
                <Menu.Menu position='right'>

                    {/* Home */}
                    <Link to="/">
                        <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}  />
                    </Link>

                    {/* Passport */}
                    
                    <Link to="/passport">
                        <Menu.Item
                            name='Passport'
                            active={activeItem === 'Passport'}
                            onClick={this.handleItemClick}
                            
                        ></Menu.Item>
                    </Link>

                    {/* LogIn */}

                    <Link to="/login">
                        <Menu.Item
                            name='Login'
                            active={activeItem === 'Login'}
                            onClick={this.handleItemClick}
                            
                        ></Menu.Item>
                    </Link>

                    {/* SignUp */}

                    <Link to="/signup">
                        <Menu.Item
                        name='Sign up'
                        active={activeItem === 'Sign up'}
                        onClick={this.handleItemClick}
                        
                        ></Menu.Item>
                    </Link>

                </Menu.Menu>`
            </Menu>

        </div>
        <Route exact path="/" component={Home}/>
        <Route path="/passport" component={Passport}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        </div>
        )
  };
}