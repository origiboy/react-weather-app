import React from 'react';

class LocationButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lon: 0,
    }
    this.onClick = this.onClick.bind(this);
    this.showPosition = this.showPosition.bind(this);
  }
  showPosition(position) {
    this.props.location(position.coords.latitude, position.coords.longitude);
  }
  onClick() {
    navigator.geolocation.getCurrentPosition(this.showPosition); // Запрашиваем местоположение, и в случае успеха вызываем функцию showPosition
  }
  render() {
    return (
        <button className="location-button" onClick={this.onClick}></button>
    );
  }
}

export default LocationButton;
