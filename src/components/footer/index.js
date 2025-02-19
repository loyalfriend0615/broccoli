import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';
import logo from '../../assets/img/logo192.png';

function Footer() {
    return (
        <div id="footer">
            <div>
                <div id="disclaimer">
                    <img src={logo} width="80px" height="80px" alt="The logend of broccoli cz's dog" />
                    <p>
                        <span>Disclaimer:</span> Broccoli memes are intended to serve as an expression of support for and engagement with the ideals and beliefs embodied by the symbol "$Broccoli" and the associated artwork. They are not intended to constitute an investment opportunity, investment contract, or security of any kind.
                    </p>
                    <p>
                        TheBroccoliMeme.com is not political and is in no way affiliated with any political campaign, political office, or governmental agency
                    </p>
                </div>
                <div id="footer-menu">
                    <div id="site">
                        <h4>Site</h4>
                        <h5>
                            <Link to='/' >HOME</Link>
                        </h5>
                        <h5>
                            <Link to='/story' >HIS STORY</Link>
                        </h5>
                        <h5>
                            <Link to='/photos' >HIS PHOTOS</Link>
                        </h5>
                        <h5>
                            <Link to='/video' >HIS VIDEO</Link>
                        </h5>
                        <h5>
                            <Link to='/his-coin' >HIS COIN $BROC</Link>
                        </h5>
                        <h5>
                            <Link to='/why-broc' >WHY $BROC</Link>
                        </h5>
                    </div>
                    <div id="legal">
                        <h4>Legal</h4>
                        <h5>
                            <Link to='terms-conditions'>TERMS & CONDITIONS</Link>
                        </h5>
                        <h5>
                            <Link to='privacy-policy'>PRIVACY & POLICY</Link>
                        </h5>
                        <h5>
                            <Link to='contact'>CONTACT US</Link>
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
    );
}

export default Footer;