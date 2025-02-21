import React, { useState} from 'react';
import emailjs from "@emailjs/browser";

import './contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Replace these with your EmailJS credentials
        const serviceId = "service_1kxibqc";
        const templateId = "template_jwv3jv7";
        const publicKey = "RZeLqZZY8D09xiGN3";
    
        emailjs.send(serviceId, templateId, formData, publicKey)
          .then((response) => {
            console.log("Email sent successfully:", response);
            const button = document.getElementById("contact_btn");
            button.innerHTML = "✔";
            setTimeout(() => {
                button.innerHTML = "Send";
            }, 4000);
            // Clear form after submission
            setFormData({ name: "", email: "", message: "" });
          })
          .catch((error) => {
            console.error("Error sending email:", error);
            const button = document.getElementById("contact_btn");
            button.innerHTML = "❌ Failed";
            setTimeout(() => {
                button.innerHTML = "Try again";
            }, 4000);
          });
    
    };
    return (
        <div id="contact">
            <div className="contactForm">
                <form onSubmit={handleSubmit}>
                    <h3>Contact Us</h3>
                    <p>
                        We'd love to get in touch and learn more about you.
                        So, send us a message and we'll reply as soon as we can.
                    </p>
                    <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required></input>
                    <input type="email" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required></input>
                    <textarea id="message" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required ></textarea>
                    <div>
                        <button id="contact_btn" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;