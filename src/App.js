import React, { Component } from 'react';
import './App.css';
import PlaylistContainer from './components/PlaylistContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Spin</h1>
        </div>
        <PlaylistContainer />
      </div>
    );
  }
}

export default App;
