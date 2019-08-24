// New user onboarding
import React, { useState } from "react";
import { Button, Form, Input } from 'semantic-ui-react';
import axios from "axios";


export default function SignUp() {

    const [user, setUser] = useState({username: "", department: "", email: "", password: ""});


    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
       
    };


    const handleSubmit = event => {
        event.preventDefault();
        
        axios
        .post('https://build-restaurant-passport.herokuapp.com/users/register', user)
        .then(res =>{
            console.log(res)
            localStorage.id = res.data.id
        })
        
        setUser({
            username: "", department: "", email: "", password: ""
        })
    };

    return(
        <Form onSubmit={handleSubmit}>
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
                    type="text"
                    name="department"
                    placeholder="department"
                    value={user.department}
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