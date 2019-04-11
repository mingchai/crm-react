import React, { Component } from 'react';
import ClientIndex from './components/ClientIndex';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          <h1>New App</h1>
        </header>
      </div>

      <ClientIndex/>
      </>
    );
  }
}

export default App;
