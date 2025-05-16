import { Link } from "react-router-dom";
import logo from "../../logo.jpg";


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