import React from 'react';
import './contact.css';

function Contact() {
    return (
        <div id="contact">
            <div className="contactForm">
                <form>
                    <h3>Contact Us</h3>
                    <p>
                        We'd love to get in touch and learn more about you.
                        So, send us a message and we'll reply as soon as we can.
                    </p>
                    <input type="text" id="name" placeholder="Your Name"></input>
                    <input type="email" id="email" placeholder="Your Email"></input>
                    <textarea id="message" placeholder="Your Message"></textarea>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;