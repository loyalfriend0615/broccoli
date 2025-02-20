import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';
import logo from '../../assets/img/logo192.png';

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
                        <div id="site">
                            <h4>Site</h4>
                            <h5>
                                <a href='/' >HOME</a>
                            </h5>
                            <h5>
                                <a href='/#story' >STORY</a>
                            </h5>
                            <h5>
                                <a href='/#photos' >GALLERY</a>
                            </h5>
                            <h5>
                                <a href='/#hiscoin' >$BROC</a>
                            </h5>
                            <h5>
                                <Link to='contact'>CONTACT US</Link>
                            </h5>
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
                        ⓒ 2025 - Copyright
                    </p>
                    <div id="social">
                        <a href="#"><i className="fa-brands fa-linkedin fa-2x"></i></a>
                        <a href="#"><i className="fa-brands fa-discord fa-2x"></i></a>
                        <a href="#"><i className="fa-brands fa-telegram fa-2x"></i></a>
                        <a href="#"><i className="fa-brands fa-github fa-2x"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;