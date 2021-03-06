// This section displays all the restaurants entered or visited by the user
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestaurantCard from './RestaurantCard.js';

const Restaurant = (props) => {
    const [rest, setRest] = useState([]);
    
    useEffect(() => {
        axios.get(`https://restaurantpassport.herokuapp.com/cities/3/restaurants`)
        .then(res => {
            console.log(res.data);
            setRest(res.data.restaurants);
        })
        .catch(err => console.log(err));
    }, []);

    return(
        <div className="card-box">
            {rest.map(r => (<RestaurantCard key={r.restID} name={r.restName} addStar={props.addStar}/>))} 
        </div>
    );
}

export default Restaurant;