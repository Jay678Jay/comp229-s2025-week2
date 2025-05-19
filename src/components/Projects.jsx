// File Name: Projects.jsx
// Student Name: Jongwon Lee
// Student ID: 401380980
// Date: May 18, 2025

// Projects page with project descriptions and images

import nintendo from "../../images/nintendo.jpg";
import restaurant from "../../images/restaurant.jpg";
import library from "../../images/library.jpg";

export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <p style={{ fontSize: '25px' }}><strong>These are my projects from the first and second semesters :</strong></p>
            {/* Project1: Library Management System */}
            <div className="project">
            <img src={library} alt="Library Management System" className="project-image" />
            <div className="project-details">
                <h2>Library Management System</h2>
                <p>I developed a library system using JavaScript that allows users to add or remove books after inputting details such as the title, author, ISBN, and number of copies. The system then displays a list of all book details.</p>
            </div>
            </div>
            {/* Project2: Restaurant Website */}
            <div className="project">
            <img src={restaurant} alt="Restaurant Website" className="project-image" />
            <div className="project-details">
                <h2>Restaurant Website</h2>
                <p>I built a multi-page restaurant website, featuring pages such as the menu, chef’s specialties, gallery, customer reviews, and contact/location.</p>
            </div>
            </div>
            {/* Project3: Nintendo Information Webpage */}
            <div className="project">
            <img src={nintendo} alt="Nintendo Webpage" className="project-image" />
            <div className="project-details">
                <h2>Nintendo Information Webpage</h2>
                <p>I developed a webpage that displays information about Nintendo consoles and games. I worked on the layout and styling using HTML and CSS.</p>
            </div>
            </div>
                    </div>

    )
}