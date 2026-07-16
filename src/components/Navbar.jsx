import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="container navbar-wrapper">

        <NavLink to="/" className="logo">
          TodoReact
        </NavLink>

        <nav className="nav-menu">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Profile
          </NavLink>

          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Project
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            About
          </NavLink>

        </nav>

      </div>

    </header>
  );
}