// This form allows the user to create a restaurant
import React, { useState, useEffect } from "react";
import { Button, Form, Input } from 'semantic-ui-react';
import axios from "axios";


export default function RestaurantInput() {
    const [newRes, setNewRes] = useState([]);
    
    const handleChange = event => {
      setUser({ ...newRes, [event.target.name]: event.target.value });
     
  };

  const handleSubmit = event => {
      event.preventDefault();
      
      axios
      .post('https://build-restaurant-passport.herokuapp.com/users/register', newRes)
      .then(res =>{
          console.log(res)
          localStorage.id = res.data.id
      })
      
      setNewRes({
        name: "", city: "", address: "", description: ""
      })
  };
    return(
        <div>
            <Form>
            <Form.Group>
                {/* name entry */}
                <Form.Field
                  control={Input}
                  type="text"
                  name="name"
                  placeholder="name"
                  value={newRes.name}
                  onChange={handleChange}
                  required
                />     

                {/* city entry */}
      
                <Form.Field
                    control={Input}
                    type="text"
                    name="city"
                    placeholder="city"
                    value={newRes.city}
                    onChange={handleChange}
                    required
                  />   

                {/* address entry */}
              
                <Form.Field
                  control={Input}
                  type="text"
                  name="address"
                  placeholder="address"
                  value={newRes.address}
                  onChange={handleChange}
                  required
                />   

                {/* description entry */}
              
                <Form.Field
                  control={Input}
                  type="text"
                  name="description"
                  placeholder="description"
                  value={newRes.description}
                  onChange={handleChange}
                  required
                />   

                {/* city id entry? */}

              <Form.Field control={Button}>Add</Form.Field>
            </Form.Group>
          </Form>
        </div>
    );
};