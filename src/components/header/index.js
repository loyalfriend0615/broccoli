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
                    <li className="nav-logo">
                        <a href="/">
                            <img src={logo} alt="dog and boy" />
                            <span>THE Broccoli Meme</span>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <button className="dropdown-toggle">
                            MORE
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a href='/terms_conditions'>TERMS & CONDITIONS</a>
                            </li>
                            <li>
                                <a href='/privacy_policy'>PRIVACY POLICY</a>
                            </li>
                            <li>
                                <a href='/disclaimer'>DISCLAIMER</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/contact">
                            <span>CONTACT US</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/#hiscoin">
                            <span>$BROC</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/#photos">
                            <span>GALLERY</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/#story">
                            <span>THE STORY</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/">
                            <span>HOME</span>
                        </a>
                    </li>
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