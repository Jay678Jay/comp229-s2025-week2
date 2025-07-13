// File Name: Layout.jsx
// Student Name: Jongwon Lee
// Student ID: 401380980
// Date: May 18, 2025


import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Layout({ user, handleLogout }) {
  return (
    <div className="App">

      <div style={{
        backgroundColor: "#a6c8ff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px"
      }}>
        <h2 style={{ margin: 0 }}>Jongwon Lee</h2>
        <img src={logo} alt="Logo" style={{ height: "60px" }} />
        <h2 style={{ margin: 0 }}>Portfolio</h2>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
        <Link className="navbar-brand" to="/">My Portfolio</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">MyProjects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-list">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects-list">Project</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education-list">Education</Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            {user ? (
              <>
                <li className="nav-item d-flex align-items-center">
                  <span className="navbar-text me-3">Welcome, {user.user}</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">Signin</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
