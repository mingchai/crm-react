import React from 'react'
import { Clients } from '../requests';
import GoogleMap from '../components/GoogleMap';

export default class ClientShowPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {client:null};
  }

  componentDidMount(){
    const id = this.props.match.params.id;
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
              <td colSpan={2}>{client.email}</td>
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
              {/* ternary operator required for conditional views */}
              {client.marketing_consent ? 
                  <td colSpan={4}>Client May Be Contacted About New Products and Offerings</td> : 
                  <td colSpan={4}>Client May Not Be Contacted About New Products and Offerings</td>
              }
            </tr>
          </tbody>
        </table>

      <GoogleMap lat={client.latitude} long={client.longitude} />
      <h4>{client.policies.map(policy => (

        <>
          <p>Policy Number: {policy.policy_number}</p>
          <p>Annual Premium: ${policy.annual_premium}</p>
        </>
      )
      )}</h4>
      </main>
    )
  }
}
