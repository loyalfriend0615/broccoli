import React from 'react';

import './home.css';

import HisGif from '../../assets/img/he-and-dog.gif';

function Home() {
    return (
        <div id="homepage">
            <h1>
                THE LEGEND OF BROCCOLI CZ'S DOG
            </h1>
            <div>
                <img src={HisGif} alt="he-and-dog" width="527px" height="485px"/>
            </div>
        </div>
    );
}

export default Home;