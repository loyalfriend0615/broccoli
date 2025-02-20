import React from 'react';

import HiscoinImage from '../../assets/img/hiscoin.png';

import './hiscoin.css';

function Hiscoin() {
    return (
        <div id="hiscoin">
            <div className="landing">
                <img src={HiscoinImage} alt="his coin" />
                <h2>
                    The Broccoli Coin<br/>
                    The Only Broccoli<br/>
                    That Matters
                </h2>
                <p>
                    Another Broccoli Coin? Nah. This is THE Broccoli Coin.
                    Listen, we get it. Meme coins named Broccoli have come and gone. They pumped, they dumped, they disappeared into the blockchainabyss. But this? This isn't just another random dog-themed token.
                    Broccoli isn't just a name—it's a legend. A Belgian Malinois with a story that no other meme coin can match. He didn't just appear out ofthin air; he arrived with a passport, a destiny, and the energy of a bull market on steroids.
                    This Broccoli didn't just pop up overnight. He showed up at CZ's doorstep—literally.
                </p>
            </div>
            <div className="legend">
                <div>
                <div>
                    <h2>
                        The Legend of Broccoli: A Meme with Meaning
                    </h2>
                </div>
                <div>
                    <p>
                        It all started with zero plans to get a dog.
                    </p>
                    <p>
                        One casual chat about dog breeds in the Dubai heat, and next thing you know—CZ's doorbell rings.
                        Standing there was a Belgian Malinois with a passport. No second thoughts. Just pure destiny
                    </p>
                </div>
                </div>
                <p>
                Broccoli was:
                </p>
                <p>
                ❌ Not socialized <br/>
                ❌ Scared of balls (seriously, he ran away from them like a rug pull) <br/>
                ❌ Not toilet trained (RIP the liquidity pools at home) <br/>
                ✅ Built for speed (15km on his first run, non-stop)
                </p>
            </div>
        </div>
    );
}

export default Hiscoin;