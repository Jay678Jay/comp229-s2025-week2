import { Routes, Route } from "react-router-dom"
import Projects from "./components/Project"
import Contact from "./components/Contact"
import About from "./components/About"
import Home from "./components/Home"
import Education from "./components/Education"

const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/education" element={<Education/>} />
                <Route path="/projects" element={<Projects/>} />
            </Routes>
        </div>
    )
}

export default MainRouter
