import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper teal">
            <Link to="/" style={{fontFamily: "clibri"}}
             className="col s5 brand-logo left black-text"
            >E-Library
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
