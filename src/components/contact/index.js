import React from 'react';
import './contact.css';

function Contact() {
    return (
        <div id="contact">
            <h2>Contact Us</h2>
            <div className="contactForm">
                <form>
                    <h3>REQUEST YOUR SERVICE</h3>
                    <input type="text" id="name" placeholder="Your Name"></input>
                    <input type="email" id="email" placeholder="Your Email"></input>
                    <textarea id="message" placeholder="Your Message"></textarea>
                    <div>
                        <button type="submit">Submit Information</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;