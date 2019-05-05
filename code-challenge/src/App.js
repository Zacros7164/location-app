import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login';
import Weather from'./Components/Weather';
import ErrorPage from './Components/ErrorPage';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login}/>
        <Route exact path="/weather" component={Weather} />
        <Route exact path="/error" component={ErrorPage} />
      </Router>
    );
  }
}

export default App;
