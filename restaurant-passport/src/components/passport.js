import React, { useState } from 'react';
// import Navigation from './Navigation';
import Restaurant from './Restaurant';
import axios from 'axios';
import { Header, Segment, Icon } from 'semantic-ui-react';

export default function Passport() {

    const [stars, setStars] = useState([(<Icon name="star" />)]);
    
    const addStar = () => {
        setStars([...stars, (<Icon name="star" />)])
    }

    return (
        <div className="passport">
            <div className="cards">
                <Header as='h3'>Restaurants</Header>
                <Segment>
                    {stars}
                </Segment>
                <Restaurant addStar={addStar}/>
            </div>
        </div>
    )
}