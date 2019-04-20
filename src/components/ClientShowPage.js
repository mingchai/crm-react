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
      <div>
        <h1>{client.first_name}</h1>
      </div>
    )
  }
}
