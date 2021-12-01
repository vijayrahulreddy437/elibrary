import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { listBooks,deleteBook } from "../../actions/authActions";
import axios from "axios";
import UserHomeNavbar from '../user/UserHomeNavbar';
const mapStateToProps = state => ({
    books: state.books
  });

class ListBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
          books: [],
          bookId:0,
          errors: {}
        };
      }

      handleAnchorClick = e =>{
        console.log(e.target.id);
          var deleteBookData = {
            id: e.target.id
          };
      
          this.props.deleteBook(deleteBookData, this.props.history);
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
          <a href="#" className="btn btn-primary" id={item._id} value={item._id} onClick={this.handleAnchorClick}>Delete</a>
        </div>
      ));

      return (
        <div>
        <UserHomeNavbar></UserHomeNavbar>
        <div id="layout-content" className="container">
          <div className="list-group">{ books }</div>
        </div>
        </div>
      );
    }
}

ListBooks.propTypes = {
    listBooks: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,{listBooks,deleteBook}
)(ListBooks);