import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginNavbar from "./LoginNavbar";
import ListBooksHome from "./ListBooksHome";

class Landing extends Component {
  render() {
    return (
      <>
        <LoginNavbar></LoginNavbar>
      <div className="container">
          <div className="col s12">
            <h4>
              List of Books Available in Library
            </h4>
            <br />
            <ListBooksHome></ListBooksHome>
        </div>
      </div></>
    );
  }
}

export default Landing;
