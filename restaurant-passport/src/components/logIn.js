// User login
import React, { useState } from "react";
import axios from 'axios';
import { Button, Form, Input } from 'semantic-ui-react';

export default function Login(props) {

    const [login, setLogin] = useState({username: "", password: ""});


    const handleChange = event => {
        setLogin({ ...login, [event.target.name]: event.target.value });
       
    };

    const handleSubmit = event => {
        event.preventDefault();

        axios
        .post('https://restaurantpassport.herokuapp.com/users/login', login)
        .then(res => {
            console.log(res);
            if(res.status === 200 && res.data){
                const token = res.data.key
                localStorage.setItem('token', `Token ${token}`)
                console.log('localstorage', localStorage)
                console.log('res.data.key?', res.data.key)
                props.history.push('/passport')
            }
        })
        .catch(err => {
            console.log(err);
        });
    };
    
    
     return (
        <Form className="loginform" onSubmit={handleSubmit}>
            <Form.Group>

                <Form.Field
                    control={Input}
                    type="text"
                    name="username"
                    placeholder="username"
                    value={login.username}
                    onChange={handleChange}
                    required
                /> 

                <Form.Field
                    control={Input}
                    type="password"
                    name="password"
                    placeholder="password"
                    value={login.password}
                    onChange={handleChange}
                    required
                />
                <Form.Field control={Button}>Submit</Form.Field>
            </Form.Group>
        </Form>
     )
}