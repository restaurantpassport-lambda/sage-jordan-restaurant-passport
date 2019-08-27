// Individual restaurant card
import React from 'react';


const RestaurantCard = ({name, city}) => {

    return(
        <div>
            <h3>Restaurants!</h3>
            <p>Name: {name}</p>
            
            {/* <p>City: {city}</p> */}
            <button className="stamps-button">Click here to get stamped!</button>
        </div>
    )
}

export default RestaurantCard;