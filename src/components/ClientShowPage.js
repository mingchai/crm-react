import React from 'react'
import { Clients } from '../requests';

export default class ClientShowPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {client:null};
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    console.log(id);
    Clients.one(id).then(client => {
      this.setState({
        client: client
      })
    });
  }

  render(){
    if(this.state.client == null){
      return(
        <h1>Loading Client Details...</h1>
      )
    }
    const {client} = this.state;
    
    return (
      <main>
        <h1>{client.first_name + ' ' + client.last_name}</h1>
        <table>
          <tbody>
            <tr>
              <td><strong>Phone Number</strong></td>
              <td>{client.phone_number}</td>
              <td><strong>Email:</strong></td>
              <td>{client.email}</td>
            </tr>
            <tr>
              <td><strong>Street Address:</strong></td>
              <td>{client.street_address}</td>
              <td><strong>City:</strong></td>
              <td>{client.city}</td>
              <td><strong>Postal Code:</strong></td>
              <td>{client.postal_code}</td>
            </tr>
            <tr>
              <td><strong>Marketing Consent?</strong></td>
              <td>Client May Be Contacted About New Products and Offerings</td>
            </tr>
          </tbody>
        </table>
      </main>
    )
  }
}
