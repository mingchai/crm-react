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
      <main>
        <h1>Employee Directory</h1>
        <table>
          <th>Name</th>
          <th>Email</th>
          <tbody>
            {this.state.users.map(user =>
              <tr>
              {/* eslint-disable-next-line */}
                <td>{`${user.first_name} ` + `${user.last_name}`}</td>
                <td>{user.email}</td>
                <td><a href="#user-details">Show More Detail</a></td>
              </tr>
              )}
          </tbody>
        </table>
      </main>
    )
  }
}

export default UserIndexPage;