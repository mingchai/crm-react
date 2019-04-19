import React from 'react';
import {Users} from '../requests'

class UserIndexPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {users : null};
  }

  componentDidMount(){
    Users.all().then(users => this.setState({users: users}))
  }

  render(){
    if(!this.state.users){
      return(
        <main>
          <h1>Loading Employee List...</h1>
        </main>
      )
    }
    return(
      <>
      {this.state.users.map(user =>
        
        <h4>{user.first_name}</h4>
        )}
      </>
    )
  }
}

export default UserIndexPage;