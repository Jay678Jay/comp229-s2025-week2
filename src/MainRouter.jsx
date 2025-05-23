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

const MainRouter = () => {
    return (
        <div>
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default MainRouter
