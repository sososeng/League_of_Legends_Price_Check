import React, { Component } from 'react';
import './App.css';

import Layout from './components/layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>LEAGUE OF LEGENDS <br/>
            Price Check AI</p>
        </div>
        <div className="Input-line">
          <Layout />
        </div>
      </div>
    );
  }
}

export default App;
