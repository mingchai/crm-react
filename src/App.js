import React, { Component } from 'react';
import ClientIndex from './components/ClientIndexPage';
import './App.css';
import SignInPage from './components/SignInPage';

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
      <SignInPage/>
      </>
    );
  }
}

export default App;
