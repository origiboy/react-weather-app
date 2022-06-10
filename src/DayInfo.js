import React from 'react';

class DayInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="day-info">
          <img src={require('./img/weather-icons/' + this.props.info.weather[0].icon + '.svg')} alt="weather icon"/>
          <div className="day-info__temperature"> { this.props.info.main.temp.toFixed(1) } &#176;C</div>
          <div className="day-info__feel-like"> Ощущается как { this.props.info.main.feels_like.toFixed(1) } &#176;C</div>
          <div className="day-info__description"> { this.props.info.weather[0].description }</div>
        </div>
    );
  }
}

export default DayInfo;
