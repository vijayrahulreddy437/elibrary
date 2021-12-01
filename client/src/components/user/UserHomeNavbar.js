import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class UserHomeNavbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser(this.props.auth.user);
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper  teal lighten-2">
                  <Link
                    to="/userhome"
                    style={{
                      width: "140px",
                      borderRadius: "0px",
                      letterSpacing: "1.5px",
                      marginLeft:"10px",
                      height:"100%"
                    }}
                    className="btn btn-primary hoverable grey darken-1 "
                  >
                    UserHome
                  </Link>
                      <Link
                          to="/createbook"
                          style={{
                            width: "",
                            borderRadius: "0px",
                            letterSpacing: "1.5px",
                            marginLeft:"10px",
                            height:"100%"
                          }}
                          className="btn btn-primary hoverable grey darken-1"
                        >
                          Create Book Entry
                        </Link>
                <button
                style={{
                  width: "150px",
                  borderRadius: "0px",
                  letterSpacing: "1.5px",
                  display:"inline-grid",
                  marginLeft:"10px",
                  height:"100%"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-primary hoverable grey darken-1"
              >
                Logout
              </button>
          </div>
        </nav>
      </div>
    );
  }
  
}

UserHomeNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(UserHomeNavbar);
