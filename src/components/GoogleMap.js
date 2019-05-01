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
      <div style={{ height: '360px', width: '100%' }}>
      {
        lat === undefined || long === undefined ? 
        <h1>Client Address is not Mappable. Default Map Provided</h1> : 
        null
      }
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD2E3HcI677WQ3yTPNalNcYVqbPChm56cs' }}
          defaultCenter={(lat === undefined) ? center : [lat, long]}
          defaultZoom={zoom}
        />
      </div>
    )
  };
}
