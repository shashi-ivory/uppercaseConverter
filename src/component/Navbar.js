import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Navbar({ name, aboutText, mode, toggleMode }) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg  navbar-${mode} bg-${mode} `}>
        <div className="container-fluid">
          <Link className="navbar-brand" href="Navbar">
            Navbar{name}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" mode={mode}>
                <Link className="nav-link active" aria-current="page" to="Home">
                  Home
                </Link>
              </li>
              <li className="nav-item" mode={mode}>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="About"
                >
                  About
                </Link>
              </li>

              <li className="nav-item" mode={mode}>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="Disable"
                >
                  Disable
                </Link>
              </li>
              <li className="nav-item" mode={mode}>
                <Link className="nav-link active" aria-current="page" to="/ ">
                  TextFrom
                </Link>
              </li>
            </ul>

            <div
              className={`form-check form-switch  text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
                mode={mode}
              >
                {mode}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
// Navbar.PropTypes = { title: PropTypes.string };
Navbar.propTypes = {
  name: PropTypes.string,
  aboutText: PropTypes.string,
};
// Navbar.defaultProps = {
//   name: "shashi",
//   aboutText: "write here",
// };
export default Navbar;
