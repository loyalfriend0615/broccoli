import React from 'react';

// import HiscoinImage from '../../assets/img/hiscoin.png';

import './hiscoin.css';

function Hiscoin() {
    return (
        <div id="hiscoin">
            <div className="landing">
                <div className="why">
                    {/* <img src={HiscoinImage} alt="his coin" /> */}
                    <h3>
                        $BROC - The Only Broccoli That Matters
                    </h3>
                    <p>
                        Another Broccoli Coin? Nah. This is <b>THE Broccoli</b>  Coin.
                        Listen, we get it. Meme coins named Broccoli have come and gone. They pumped, they dumped, they disappeared into the blockchainabyss. But this? This isn't just another random dog-themed token.
                    </p>
                    <p>
                        Broccoli isn't just a name—it's a legend. A Belgian Malinois with a story that no other meme coin can match. He didn't just appear out ofthin air; he arrived with a passport, a destiny, and the energy of a bull market on steroids.
                        This Broccoli didn't just pop up overnight. He showed up at CZ's doorstep—literally.
                    </p>
                </div>
            </div>
            <div className="legend why" >
                <h3>
                    A Meme with Meaning
                </h3>
                <p>
                    One casual chat about dog breeds in the Dubai heat, and next thing you know— <b>CZ's doorbell rings.</b> 
                    Standing there was <b>a Belgian Malinois with a passport.</b> No second thoughts. Just <b>pure destiny</b>
                </p>
                <p>
                    <b>Broccoli was:</b><br/>
                    ❌ Not socialized <br/>
                    ❌ Scared of balls (seriously, he ran away from them like a rug pull) <br/>
                    ❌ Not toilet trained (RIP the liquidity pools at home) <br/>
                    ✅ Built for speed (15km on his first run, non-stop)<br/>
                    <b>Over time, Broccoli adapted. Broccoli grew strong.</b>
                </p>
            </div>
        </div>
    );
}

export default Hiscoin;