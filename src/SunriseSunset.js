import React from 'react';
import {sun} from './functions.js';

class SunriseSunset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sunStyles: sun(this.props.sunriseSeconds, this.props.sunsetSeconds),
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.sunriseSeconds !== this.props.sunriseSeconds) {
      this.setState({
        sunStyles: sun(nextProps.sunriseSeconds, nextProps.sunsetSeconds),
      });
    }
  }
  render() {
    return (
      <div className="sunrise-sunset">
        <div className="time">Восход: <br/>{ this.props.sunrise }</div>
        <div className="trajectory__wrapper">


          <div className="trajectory"></div>


          {this.state.sunStyles.display == 'none' ? (
          <div className="moon"></div>
        ) : (
          <div className="sun" style={ this.state.sunStyles }></div>
        )}
        </div>
          <div className="time">Закат: <br/>{ this.props.sunset }</div>
      </div>
    );
  }
}

export default SunriseSunset;
