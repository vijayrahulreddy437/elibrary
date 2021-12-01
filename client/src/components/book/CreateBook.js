import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createBook } from "../../actions/authActions";
import classnames from "classnames";
import UserHomeNavbar from "../user/UserHomeNavbar";

class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      availability: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/createbook");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newBook = {
      name: this.state.name,
      description: this.state.description,
      availability: this.state.availability
    };

    this.props.createBook(newBook, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (<div>

          <UserHomeNavbar></UserHomeNavbar>
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2 z-depth-5 " style={{padding:"10px",border:"1px solid"}}>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>Create New Book Item              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                      invalid: errors.name
                    })}
                    />
                <label htmlFor="name">Name</label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.description}
                  error={errors.description}
                  id="description"
                  type="text"
                  className={classnames("", {
                      invalid: errors.description
                    })}
                    />
                <label htmlFor="email">Description</label>
                <span className="red-text">{errors.description}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.availability}
                  error={errors.availability}
                  id="availability"
                  type="text"
                  className={classnames("", {
                      invalid: errors.availability
                    })}
                    />
                <label htmlFor="availability">Avaliability</label>
                <span className="red-text">{errors.availability}</span>
              </div>
              
              
              <div className="col s12 center" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                      width: "",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable teal"
                >
                  Create New Book Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
</div>
    );
  }
}

CreateBook.propTypes = {
    createBook: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createBook }
)(withRouter(CreateBook));
