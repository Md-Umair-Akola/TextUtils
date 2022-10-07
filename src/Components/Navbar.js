import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mod} bg-${props.mod}`}>
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            {/* <li className="nav-item active">
              <a className="nav-link" href="/about">
                {props.about}
              </a>
            </li> */}
          </ul>
          <div className={`custom-control custom-switch text-${props.mod==='light'?'dark':'light'}`}>
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
            />
            <label className="custom-control-label " htmlFor="customSwitch1" onClick={props.tgl} >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </nav>
    
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "MyTextUtls",
  about: "About TextUtils",
};
