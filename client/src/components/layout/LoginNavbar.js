import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginNavbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
          <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large right waves-effect waves-light hoverable blue accent-3"
              >
                Log In
              </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default LoginNavbar;
