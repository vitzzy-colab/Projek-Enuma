import { NavLink } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="Navbar">
            {}
            <NavLink to="/" className="brand-logo">
                Todolist React
            </NavLink>

            {}
            <div className="nav-links">
                <NavLink to="/" className={({isActive}) =>
                    `nav-link ${isActive ? "active" : ""}`}>
                    Home
                </NavLink>
                <NavLink to="/Profile" className={({isActive}) =>
                    `nav-link ${isActive ? "active" : ""}`}>
                    Profile
                </NavLink>
                <NavLink to="/Project" className={({isActive}) =>
                    `nav-link ${isActive ? "active" : ""}`}>
                    Project
                </NavLink>
                <NavLink to="/About" className={({isActive}) =>
                    `nav-link ${isActive ? "active" : ""}`}>
                    About
                </NavLink>
            </div>
        </nav>
    );
}