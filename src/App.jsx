import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />

        <main className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/project" element={<Project />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;