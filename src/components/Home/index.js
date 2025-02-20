import React from 'react';

import twitter from '../../assets/img/twitter.png';
import telegram from '../../assets/img/telegram.png';
import pancakeswap from '../../assets/img/pancakeswap.png';
import icon4 from '../../assets/img/icon4.png';
import icon5 from '../../assets/img/icon5.png';

import './home.css';

import HisGif from '../../assets/img/he-and-dog.gif';

function Home() {
    return (
        <div id="home">
            <div id="homepage">
                <div>
                    <h1>
                        The Legend of Broccoli<br/>
                        CZ's Dog, and his Meme Coin<br/>
                        <b>THE Broccoli $BROC</b>
                    </h1>
                    <h2>Join Our Community</h2>
                    <div>
                        <a href="#">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="#">
                            <img src={telegram} alt="telegram" />
                        </a>
                        <a href="#">
                            <img src={pancakeswap} alt="pancakeswap" />
                        </a>
                        <a href="#">
                            <img src={icon4} alt="icon4" />
                        </a>
                        <a href="#">
                            <img src={icon5} alt="icon5" />
                        </a>
                    </div>
                </div>
                <div>
                    <img src={HisGif} alt="he-and-dog" width="450px" height="430px"/>
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