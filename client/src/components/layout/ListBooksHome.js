import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { listBooks } from "../../actions/authActions";
import axios from "axios";
const mapStateToProps = state => ({
    books: state.books
  });

class ListBooksHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
          books: [],
          errors: {}
        };
      }
   
      componentDidMount(){
        axios
        .get("/api/users/books")
        .then(res => {
            console.log(res.data);
            this.setState({ books: res.data });
        }).catch();
      }

    render() {
        const books = this.state.books.map((item, i) => (
            <div className="list-group-item">
              <h5 className="list-group-item-heading">Book Name : { item.name}</h5>
              <p className="list-group-item-text"><b>Description</b> : { item.description }</p>
              <p className="list-group-item-text"><b>Book Available : </b> : { item.availability }</p>
          </div>
          ));

          return (
            <div id="layout-content" className="">
              <div className="list-group">{ books }</div>
            </div>
          );
    }
}

ListBooksHome.propTypes = {
    listBooks: PropTypes.func.isRequired};

export default connect(
    mapStateToProps,{listBooks}
)(ListBooksHome);