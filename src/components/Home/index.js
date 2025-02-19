import React from 'react';

import './home.css';

import HisGif from '../../assets/img/he-and-dog.gif';

function Home() {
    return (
        <div>
            <div id="homepage">
                <h1>
                    THE LEGEND OF BROCCOLI CZ'S DOG
                </h1>
                <div>
                    <img src={HisGif} alt="he-and-dog" width="527px" height="485px"/>
                </div>
            </div>
            <div className="copy">
                <h4>
                    CA: Broccoli memes are intended to serve as an expression of support for and engagement with the ideals and beliefs embodied by the symbol
                    "$Broccoli" and the associated artwork. They are not intended to constitute an investment opportunity, investment contract, or security of any kind.
                </h4>
                <button>COPY</button>
            </div>
        </div>
    );
}

export default Home;