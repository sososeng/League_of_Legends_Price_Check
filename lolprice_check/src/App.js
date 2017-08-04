import React, { Component } from 'react';
import './App.css';

import Layout from './components/layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className = "logo" src = "logo.png" alt=""/>
          <p className = "subtitle">Price Check AI</p>
        </div>
        <Layout />
      </div>
    );
  }
}

export default App;
