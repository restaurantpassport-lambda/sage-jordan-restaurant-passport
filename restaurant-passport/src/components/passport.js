import React, { useState } from 'react';
import Navigation from './Navigation';
import Restaurant from './Restaurant';
import axios from 'axios';

import { Header } from 'semantic-ui-react';

export default function Passport() {

    const [restaurants, setRestaurants] = useState([]);

    axios.get("https://restaurantpassport.herokuapp.com/cities")
    .then(res => console.log(res))
    .catch(err => console.log(err));

    return (
        <div>
        {/* <Navigation/> */}
        <div className="cards">
        <Header as='h3'>Restaurants</Header>
            <Restaurant/>
        </div>
        </div>
    )
}