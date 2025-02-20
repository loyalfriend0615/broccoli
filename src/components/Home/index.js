import React from 'react';

import twitter from '../../assets/img/twitter.png';
import telegram from '../../assets/img/telegram.png';
import discord from '../../assets/img/discord.png';
import bird from '../../assets/img/bird.png';
import dex from '../../assets/img/dex.png';
import bunny from '../../assets/img/bunny.png';
import github from '../../assets/img/github.png';

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
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a href="#">
                            <img src={telegram} alt="telegram" />
                        </a>
                        <a href="#">
                            <img src={discord} alt="discord" />
                        </a>
                        <a href="#">
                            <img src={bird} alt="DEX Screener" />
                        </a>
                        <a href="#">
                            <img src={dex} alt="DEX Tools" />
                        </a>
                        <a href="#">
                            <img src={bunny} alt="PancakeSwap" />
                        </a>
                        <a href="#">
                            <img src={github} alt="github" />
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