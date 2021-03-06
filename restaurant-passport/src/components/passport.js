import React, { useState } from 'react';

import Restaurant from './Restaurant';

import { Header, Segment, Icon } from 'semantic-ui-react';

export default function Passport() {

    const [stars, setStars] = useState([(<Icon name="star" />)]);
    
    const addStar = () => {
        setStars([...stars, (<Icon name="star" />)])
    }

    return (
        <div className="passport">
            <div className="cards">
                <Header as='h2'>Restaurants</Header>
                <Segment>
                    {stars}
                </Segment>
                <Restaurant addStar={addStar}/>
            </div>
        </div>
    )
}