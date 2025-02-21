import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';
import logo from '../../assets/img/logo192.png';

import twitter from '../../assets/img/twitter.png';
import telegram from '../../assets/img/telegram.png';
import discord from '../../assets/img/discord.png';
import bird from '../../assets/img/bird.png';
import dex from '../../assets/img/dex.png';
import bunny from '../../assets/img/bunny.png';
import github from '../../assets/img/github.png';

function Footer() {
    return (
        <div id="footer-container">
            <div id="footer">
                <div>
                    <div id="disclaimer">
                        <img src={logo} width="80px" height="80px" alt="The logend of broccoli cz's dog" />
                        <p>
                            <Link to='/disclaimer'><span>Disclaimer:</span></Link>  The Broccoli Meme is intended to serve as an expression of support for and engagement with the ideals and beliefs embodied by the symbol "$BROC" and the associated artwork. It is not intended to constitute an investment opportunity, investment contract, or security of any kind.
                            $BROC is a meme coin with no intrinsic value or expectation of financial return. The coin is completely useless and for entertainment purposes only.
                        </p>
                    </div>
                    <div id="footer-menu">
                        <div>
                            <h4>Site</h4>
                            <div id="site">
                                <div>
                                    <h5>
                                        <a href='/' >HOME</a>
                                    </h5>
                                    <h5>
                                        <a href='/#story' >STORY</a>
                                    </h5>
                                    <h5>
                                        <a href='/#photos' >GALLERY</a>
                                    </h5>
                                </div>
                                <div>
                                    <h5>
                                        <a href='/#hiscoin' >$BROC</a>
                                    </h5>
                                    <h5>
                                        <a href='/#whybroc' >WHY BROC</a>
                                    </h5>
                                    <h5>
                                        <Link to='contact'>CONTACT US</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div id="legal">
                            <h4>Legal</h4>
                            <h5>
                                <Link to='privacy-policy'>PRIVACY POLICY</Link>
                            </h5>
                            <h5>
                                <Link to='terms-conditions'>TERMS & CONDITIONS</Link>
                            </h5>
                            <h5>
                                <Link to='disclaimer'>DISCLAIMER</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div>
                    <p>
                        ⓒ 2025 THE Broccoli Meme. All rights reserved.
                    </p>
                    <div className="social">
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
            </div>
        </div>
    );
}

export default Footer;