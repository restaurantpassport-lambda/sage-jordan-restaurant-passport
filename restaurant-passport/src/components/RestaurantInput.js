// This form allows the user to create a restaurant
import React, { useState, useEffect } from "react";
import { Button, Form, Input } from 'semantic-ui-react';
import axios from "axios";


export default function RestaurantInput() {
    const [newRes, setNewRes] = useState([]);

    useEffect(() => {
      if (status) {
        setNewRes([...newRes, status]);
      }
    }, [status]);

    return(
        <div>
            <Form>

            {/* name entry */}
          <Field component="input" type="text" name="name" placeholder="Restaurant Name"></Field>
          

            {/* city entry */}
          <Field component="input" type="text" name="city" placeholder="City"></Field>
          

            {/* address entry */}
            <Field component="input" type="text" name="address" placeholder="Address"></Field>
            

            {/* description entry */}
            <Field component="description" type="text" name="description" placeholder="Description"></Field>
            

                {/* city id entry? */}


          <Button type="submit">Add</Button>
            </Form>
        </div>
    );
};