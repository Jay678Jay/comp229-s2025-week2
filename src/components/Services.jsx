// File Name: Services.jsx
// Student Name: Jongwon Lee
// Student ID: 401380980
// Date: May 18, 2025

// Services page with images and descriptions of services offered

import web from "../assets/webDev.jpg";
import mobile from "../assets/mobileApp.jpg";
import program from "../assets/programming.jpg";

export default function Services() {
    return (
    <div className="services-page">
    <h1>Services</h1>
    
    {/* Web Development Service */}
      <div className="service">
        <img src={web} alt="Web Development" />
        <div>
          <h2>Web Development</h2>
          <p>Build responsive websites using HTML, CSS, and JavaScript.</p>
        </div>
      </div>
      {/* Mobile App Design Service */}
      <div className="service">
        <img src={mobile} alt="Mobile Design" />
        <div>
          <h2>Mobile App Design</h2>
          <p>Design basic mobile-friendly layouts and UI for Android apps.</p>
        </div>
      </div>
      {/* General Programming Service */}
      <div className="service">
        <img src={program} alt="Programming" />
        <div>
          <h2>General Programming</h2>
          <p>Write, debug, and explain code in JavaScript or C#.</p>
        </div>
      </div>

    </div>
    )

}