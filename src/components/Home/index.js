import React from 'react';

import twitter from '../../assets/img/twitter.png';
import telegram from '../../assets/img/telegram.png';
import pancakeswap from '../../assets/img/pancakeswap.png';
import icon4 from '../../assets/img/icon4.png';
import icon5 from '../../assets/img/icon5.png';

import './home.css';
import {copyToClipboard1} from '../../function/function.js';
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
                <span>Contract Adress:</span>
                <input type="text" id="ca1" value="qfasdfagadsasfdqaefadgadsgasdfasdfasdfasdfasdfafdadsfasdffe" readonly />
                <button id="btn1" onClick = {copyToClipboard1}>Copy CA</button>
            </div>
        </div>
    );
}

export default Home;