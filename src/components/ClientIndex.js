import React from 'react'
import { Clients } from '../requests';

export default class ClientIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {clients : null};
  };

  componentDidMount(){
    Clients.all().then(clients => {
      this.setState({clients : clients})
    })
  }

  render(){
    return (
      <div>
        <h1>Client Index Page</h1>
        <div>
          {this.state.clients.map(client => 
            <p>{client.first_name}</p>
          )}
        </div>
      </div>
    )
  }
}
