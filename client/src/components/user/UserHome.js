import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import UserHomeNavbar from "./UserHomeNavbar";
import ListBooks from "../book/ListBooks";

class UserHome extends Component {
   render() {
    return (
    <div>
      <ListBooks></ListBooks>
      </div>
    );
  }
}

export default UserHome;
