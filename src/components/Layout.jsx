// File Name: Layout.jsx
// Student Name: Jongwon Lee
// Student ID: 401380980
// Date: May 18, 2025


// Layout/Navigation with Links and Logo
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";


export default function Layout() {
    return (
        <>

        <div className="logo-header">
            <h1>Jongwon Lee <img src={logo} alt="Logo" className="logo" /> Portfolio</h1>           

        </div>
        <div>
            <nav className="nav-links">
                <Link to="/">Home</Link> | 
                <Link to="/about">About Me</Link> | 
                <Link to="/projects">Projects</Link> | 
                <Link to="/services">Services</Link> | 
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
                        
            
            
        </>
    )
}