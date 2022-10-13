import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/home/Home.jsx"
import Sobre from "../Pages/Sobre/Sobre.jsx"
import Error from "../Pages/error/Error.jsx"
import Project from "../Pages/projects/Project.jsx";

export default function Routers() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Projetos" element={<Project />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}