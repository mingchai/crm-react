import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

export default class GoogleMap extends Component {

  static defaultProps = {
    center: {
      lat: 49.2827,
      lng: -123.1207
    },
    zoom: 15
  };


  render(){
    const {lat, long, center, zoom} = this.props;
    return (
      <div style={{ height: '100vh', width: '100%' }}>
      {
        lat === null || long === null ? 
        <h1>Client Address is not Mappable. Default Map Provided</h1> : 
        null
      }
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD2E3HcI677WQ3yTPNalNcYVqbPChm56cs' }}
          defaultCenter={(lat === null) ? center : [lat, long]}
          defaultZoom={zoom}
        />
      </div>
    )
  };
}
