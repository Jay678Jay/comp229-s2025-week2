import { Link } from "react-router-dom";
import logo from "../../logo.jpg";


export default function Layout() {
    return (
        <>
            <h1>My Portfolio</h1>
            <img src={logo} alt="Logo" />
            
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About Me</Link> | <Link to="/projects">Projects</Link> | <Link to="/services">Services</Link> | <Link to="/contact">Contact</Link>
            </nav>
        </>
    )
}