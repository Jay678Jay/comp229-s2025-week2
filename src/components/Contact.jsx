// File Name: Contact.jsx
// Student Name: Jongwon Lee
// Student ID: 401380980
// Date: May 18, 2025


// Contact page with contact information and a form

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Failed to send contact message");
      }

      alert("Thank you, your message has been sent.");
      navigate("/");
    } catch (error) {
      console.error("Error submitting contact form:", error.message);
      alert("Something went wrong. Please try again.");
    }
  };

    return (

    <div className="contact-page">
        <h1>Contact</h1>

        {/* Contact information */}
        <div className="contact-info">
            <p><strong>Name:</strong> Jongwon Lee</p>
            <p><strong>Email:</strong> jlee678@my.centennialcollege.ca</p>
        </div>

        {/* Contact form */}
        <div className="contact-form">
        <p>If you have any questions, please leave your contact information and message:</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
            />

            <label htmlFor="phone">Phone:</label>
            <input
                 type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                name="message"
                rows="3"
                value={form.message}
                onChange={handleChange}
                required
            ></textarea>

            <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}