import React, { Component } from 'react';
import './App.css';

import Layout from './components/layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>League of Legends Price Check</p>
        </div>
        <Layout />
      </div>
    );
  }
}

export default App;
