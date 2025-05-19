// File Name: Contact.jsx
// Student Name: Jongwon Lee
// Student ID: 401380980
// Date: May 18, 2025


// Contact page with contact information and a form

import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault(); 
        alert("Thank you, your message has been sent."); 
        navigate("/");
    };

    return (

    <div className="contact-page">
        <h1>Contact</h1>
        {/* Contact information */}
        <div class="contact-info">
            <p><strong>Name:</strong> Jongwon Lee</p>
            <p><strong>Email:</strong> jlee678@my.centennialcollege.ca</p>
        </div>

        {/* Contact form */}
        <div className="contact-form">
        <p>If you have any questions, please leave your contact information and message:</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="3" required></textarea>
            
            <button type="submit">Send</button>
        </form>
        </div>
    </div> 

)
}