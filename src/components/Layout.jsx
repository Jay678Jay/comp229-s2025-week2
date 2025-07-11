// File Name: Layout.jsx
// Student Name: Jongwon Lee
// Student ID: 401380980
// Date: May 18, 2025


// Layout/Navigation with Links and Logo
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";


export default function Layout({ user, handleLogout }) {
  return (
    <>
      <div className="logo-header">
        <h1>
          Jongwon Lee <img src={logo} alt="Logo" className="logo" /> Portfolio
        </h1>
      </div>

      <div>
        <nav className="nav-links" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          <div style={{ display: "flex", gap: "15px" }}>
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
          
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>

            {user ? (
              <>
                <span className="navbar-text me-3">Welcome, {user.user}</span>
                <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/signup">Signup</Link>
                <Link to="/signin">Signin</Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}