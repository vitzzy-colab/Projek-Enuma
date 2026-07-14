import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import Project from "./pages/project"
import About from "./pages/About";

//Hapus semua section
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          {}
          <Navbar/>
          {}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App