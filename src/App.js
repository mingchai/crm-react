import React, { Component } from 'react';
// import './App.css';

import ClientIndex from './components/ClientIndexPage';
import SignInPage from './components/SignInPage';
import HomePage from './components/HomePage';
import SideNav from './components/SideNav';
import AuthRoute from "../src/components/AuthRoute";
import UsersIndexPage from './components/UsersIndexPage';

import {Users, Session} from './requests';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {currentUser:null};

    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  getCurrentUser(){
    Users.current().then(data => {
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
            <h1>Logo Will Go Here</h1>
          </header>
          {/* <SideNav/>
            <a href="#logoutLink" onClick = {this.signOut}>Logout</a> */}
          <Switch>
            <AuthRoute isAuth={currentUser} path="/" exact component={HomePage}/>
            <Route path="/sign_in" exact render = {routeProps => <SignInPage {...routeProps} onSignIn = {this.getCurrentUser}/>}>
            </Route>
            <Route path="/users" render = {routeProps => <UsersIndexPage {...routeProps}/>}/>
            <AuthRoute isAuth = {currentUser} exact path="/clients" component={ClientIndex}/>
          </Switch>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
