import React from 'react';

import { copyToClipboard2 } from '../../function/function.js';

import './WhatsNext.css';

function WhatsNext() {
    return (
        <div>
            <div id="whatsnext">
                <h2>
                    Whats Next
                </h2>
                <p>
                    🔥 <b>Strengthen the Pack</b> - The coin is already live, but the community is what makes it unstoppable. <br/>
                    🌎 <b>Grow the Community</b> - Because memes mean more when we meme together. <br/>
                    🎉 <b>Have Fun</b>  - Because that's what crypto is all about.
                </p>
                <p>
                    This isn't about <b>false promises, fake hype, or overnight riches. <br/>
                    THE Broccoli Coin is here to build something real, something fun, and something legendary. <br/></b>
                    So, are you in? <br/>
                    <b>Buy. Hold. Meme Hard. Stay Loyal. Be THE Broccoli. <br/>
                    THE Broccoli to the moon!</b> 🌕
                </p>
            </div>
            <div className="copy">
                <span>Contract Adress:</span>
                <input type="input" id="ca2" value="qfasdfagadsasfdqaefadgadsgasdfasdfasdfasdfasdfafdadsfasdffe" readonly></input>
                <button id="btn2" onClick={copyToClipboard2}>Copy CA</button>
            </div>
        </div>
    );
}

export default WhatsNext;