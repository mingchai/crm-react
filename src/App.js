import React, { Component } from 'react';
import ClientIndex from './components/ClientIndexPage';
import './App.css';
import SignInPage from './components/SignInPage';
import HomePage from "./components/HomePage";
import {User, Session} from './requests';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AuthRoute from "../src/components/AuthRoute";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {currentUser:null};

    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  getCurrentUser(){
    User.current().then(data => {
      const {current_user: currentUser} = data;
      if(currentUser){this.setState({currentUser})}
    })
  }

  componentDidMount(){
    this.getCurrentUser();
  }

  signOut(e){
    e.preventDefault();
    this.setState({currentUser:null});
    Session.destroy();
  }

  render() {
    const {currentUser} = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>New App</h1>
          </header>
          <a href="#not-used" onClick = {this.signOut}>Logout</a>
          <Switch>
            <AuthRoute isAuth={currentUser} path="/" exact component={HomePage}/>
            <Route path="/sign_in" exact render = {routeProps => <SignInPage {...routeProps} onSignIn = {this.getCurrentUser}/>}>
            </Route>
            <AuthRoute isAuth = {currentUser} exact path="/clients" component={ClientIndex}/>
            <ClientIndex/>
          </Switch>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
