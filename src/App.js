import React, { Component } from 'react';
import {Content} from './components/index';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> Header </header>
        <Content />
      </div>
    );
  }
}

export default App;
