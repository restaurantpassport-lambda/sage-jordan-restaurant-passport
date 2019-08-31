// New user onboarding
import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input } from 'semantic-ui-react';

export default function SignUp(props) {

    const [user, setUser] = useState({username: "", email: "", password: ""});


    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
       
    };


    const handleSubmit = event => {
        event.preventDefault();
        
        axios
        .post('https://restaurantpassport.herokuapp.com/users/register', user)
        .then(res =>{
            console.log(res)
            const token = res.data.key
            localStorage.setItem('token', `Token ${token}`)
            props.history.push('/login')
        })
        
        setUser({
            username: "", email: "", password: ""
        })
    };

    return(
        <Form className="signupform" onSubmit={handleSubmit}>
            <Form.Group>
                
                    <Form.Field
                    control={Input}
                    type="text"
                    name="username"
                    placeholder="username"
                    value={user.username}
                    onChange={handleChange}
                    required
                    />          
                
                    <Form.Field
                    control={Input}
                    type="email"
                    name="email"
                    placeholder="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                    />
                    
                    <Form.Field
                    control={Input}
                    type="password"
                    name="password"
                    placeholder="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                    />
                    
                    <Form.Field control={Button}>Submit</Form.Field>
            </Form.Group>
        </Form>
    )
}