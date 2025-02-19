import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo192.png';
import "./header.css";

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
  hamburger.classList.toggle('active');
    const navleft = document.querySelector('.nav-left');
  navleft.classList.toggle('active');
    const navright = document.querySelector('.nav-right');
  navright.classList.toggle('active');
}

function Header() {
    return (
        <div id="header">
            <nav className="navbar">
                <ul className="nav-list">
                    <div className="nav-left">
                        <li className="nav-item">
                            <Link to='/' id="home">HOME</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="dropdown-toggle">
                                ABOUT BROCCOLI
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to='/story'>HIS STORY</Link>
                                </li>
                                <li>
                                    <Link to='/photos'>HIS PHOTOS</Link>
                                </li>
                                <li>
                                    <Link to='/video'>HIS VIDEO</Link>
                                </li>
                            </ul>
                        </li>
                    </div>
                    <img src={logo} alt="The Legend of CZ's Dog" width="80px" height="80px" />
                    <div className="nav-right">
                        <li className="nav-item dropdown">
                            <button className="dropdown-toggle">
                                $BROC
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to='/his-coin'>HIS COIN $BROC</Link>
                                </li>
                                <li>
                                    <Link to='/why-broc'>WHY $BROC</Link>
                                </li>
                                <li>
                                    <Link to='/whats-next'>WHAT'S NEXT</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown" id="more">
                            <button className="dropdown-toggle">
                                MORE
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to='/terms-conditions'>TERMS & CONDITIONS</Link>
                                </li>
                                <li>
                                    <Link to='/privacy-policy'>PRIVACY POLICY</Link>
                                </li>
                                <li>
                                    <Link to='/disclaimer'>DISCLAIMER</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>CONTACT US</Link>
                                </li>
                            </ul>
                        </li>
                    </div>
                    <div className="hamburger-menu" onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Header;