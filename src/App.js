import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './components/Router';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <header className="App-header"> Header </header>
          <Router />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
