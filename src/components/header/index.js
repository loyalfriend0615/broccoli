import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";


import logo from '../../assets/img/logo192.png';

import "./header.css";

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
  hamburger.classList.toggle('active');
  const navitems = document.querySelector('.nav-items');
  navitems.classList.toggle('active');
}

function Header() {
    const location = useLocation();
  
    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100); // Delay ensures the DOM is loaded
        }
      }
    }, [location]);
    return (
        <div id="header-container">
            <div id="header">
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-logo">
                            <a href="/">
                                <img src={logo} alt="dog and boy" />
                                <span>THE Broccoli Meme</span>
                            </a>
                        </li>
                        <div className="nav-items">
                            <li className="nav-item">
                                <a href="/">
                                    <span>HOME</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={toggleMenu} href="/#story">
                                    <span>STORY</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={toggleMenu} href="/#photos">
                                    <span>GALLERY</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={toggleMenu} href="/#hiscoin">
                                    <span>$BROC</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={toggleMenu} href="/#whybroc">
                                    <span>WHY BROC</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/contact">
                                    <span>CONTACT US</span>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="dropdown-toggle">
                                    MORE
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href='/privacy-policy'>PRIVACY POLICY</a>
                                    </li>
                                    <li>
                                        <a href='/terms-conditions'>TERMS & CONDITIONS</a>
                                    </li>
                                    <li>
                                        <a href='/disclaimer'>DISCLAIMER</a>
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
        </div>
    );
}

export default Header;