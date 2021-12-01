import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import UserHome from "./components/user/UserHome";
import CreateBook from "./components/book/CreateBook";
import ListBooks from "./components/book/ListBooks";
import Cookies from 'universal-cookie';


import "./App.css";

const session = require('express-session');

const cookies = new Cookies();
cookies.get('ebook');
if(cookies.get('ebook')){
  if("null" != cookies.get('ebook')){
    console.log(cookies.get('ebook'))
    const token = cookies.get('ebook').replace('Bearer ', '');
    setAuthToken(token);
    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      store.dispatch(logoutUser());
      window.location.href = "./login";
    }
  }else{
    cookies.remove('ebook')
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <Route exact path="/listbook" component={ListBooks} />
              <PrivateRoute exact path="/userhome" component={UserHome} />
              <PrivateRoute exact path="/createbook" component={CreateBook} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
