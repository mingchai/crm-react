import React from 'react'
import { Clients } from '../requests';

export default class ClientIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {clients : null};
  };

  componentDidMount(){
    // console.log("component mounted")
    Clients.all().then(clients => {
      // console.table(clients)
      this.setState({clients : clients})
    })
  }

  render(){
    if(!this.state.clients){
      return(
        <main>
          <h1>Loading Client List...</h1>
        </main>
      )
    }
    return (
      <main>
        <h1>Client Index Page</h1>
          <table>
            <th> First Name </th>
            <th> Phone Number </th>
            <th> Email </th>
            <tbody>
              {this.state.clients.map(client => (
                <tr>
                  {/* eslint-disable-next-line */}
                  <td><a href="#showPage">{`${client.first_name}` + ` ${client.last_name}`}</a></td>
                  <td>{client.phone_number}</td>
                  <td>{client.email}</td>
                  <td><a href="#showPage">Show More Details</a></td>
                  <td><a href="#deleteRecord">Delete Record</a></td>
                </tr>
                )
              )}
            </tbody>
          </table>
      </main>
    )
  }
}
