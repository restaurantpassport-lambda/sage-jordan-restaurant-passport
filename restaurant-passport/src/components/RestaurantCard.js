// Individual restaurant card
import React from 'react';

const RestaurantCard = ({name, city, address, description}) => {
    return(
        <div>
            <p>Name: {name}</p>
            <p>Description: {description}</p>
            <p>Address: {address}</p>
            <p>City: {city}</p>
            <img src="" alt="passport stamp"></img>
        </div>
    )
}

export default RestaurantCard;