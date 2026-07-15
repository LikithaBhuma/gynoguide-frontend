import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaHeart, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Assistant", href: "/assistant" },
  { name: "Diseases", href: "/diseases" },
  { name: "Medicines", href: "/medicines" },
  { name: "Videos", href: "/videos" },
  { name: "Notes", href: "/notes" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");

    window.location.reload();
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`navbar navbar-expand-lg sticky-top shadow-sm ${
        darkMode ? "navbar-dark" : "navbar-light"
      }`}
    >
      <div className="container">

        {/* Logo */}

        <Link
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
          to="/"
        >
          <FaHeart
            style={{
              fontSize: "0.85rem",
              color: "#e91e63",
            }}
          />
          GynoGuide AI
        </Link>

        {/* Mobile Toggle */}

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className={`collapse navbar-collapse ${open ? "show" : ""}`}
        >

          <ul className="navbar-nav ms-auto align-items-lg-center">

            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  className="nav-link"
                  to={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Login/Register OR Profile */}

            {!user ? (
              <>
                <li className="nav-item ms-lg-3">
                  <Link
                    to="/login"
                    className="btn btn-outline-primary rounded-pill me-lg-2 mt-2 mt-lg-0"
                  >
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/register"
                    className="btn btn-primary rounded-pill mt-2 mt-lg-0"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item dropdown ms-lg-3">

                <button
                  className="btn btn-outline-primary dropdown-toggle d-flex align-items-center"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <FaUserCircle className="me-2" size={20} />
                  {user.name}
                </button>

                <ul className="dropdown-menu dropdown-menu-end">

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/profile"
                    >
                      My Profile
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </li>

                </ul>

              </li>
            )}

            {/* Dark Mode */}

            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <DarkModeToggle />
            </li>

          </ul>

        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;