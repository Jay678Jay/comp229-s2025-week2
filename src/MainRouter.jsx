// File Name: MainRouter.jsx
// Student Name: Jongwon Lee
// Student ID: 401380980
// Date: May 18, 2025

import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Projects from "./components/Projects"
import ProjectsList from "./components/Project-list"
import ProjectDetails from "./components/Project-details";
import Signup from "./components/Signup"
import Signin from "./components/Signin"



const MainRouter = ({ user, handleLogout, setUser }) => {
    return (
        <div>
            <Layout user={user} handleLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects-list" element={<ProjectsList />} />
                <Route path="/project-details/:id?" element={<ProjectDetails />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin setUser={setUser} />} />
            </Routes>
        </div>
    )
}

export default MainRouter;
