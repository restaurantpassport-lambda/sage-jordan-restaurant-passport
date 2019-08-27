// Individual restaurant card
import React from 'react';
import { Button } from 'semantic-ui-react';


const RestaurantCard = ({name}) => {

    return(
        <div className="restCardCont">
            
            <p>Name: {name.charAt(0).toUpperCase()+ name.slice(1)}</p>
            
            <p>City: Provo</p>
            <Button primary>Stamp your passport</Button>
        </div>
    )
}

export default RestaurantCard;