import React, {useState} from 'react';
import { Icon } from 'semantic-ui-react';

export default function Stamps() {

    const [stars, setStars] = useState([(<Icon name="star" />)]);

    function addStar ()  {
        setStars([...stars, (<Icon name="star" />)]);
    }

    return (
        <div className="stamps-container">
            {stars}
        </div>
    )
}