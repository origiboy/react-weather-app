import React from 'react';

class WeekInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let weather = [];
    let i = 0;
    let length = this.props.info.list.length;
    for (let j = 0; j < length; j++) {
      let date = this.props.info.list[j].dt_txt.split(' ')[0];
      let time = this.props.info.list[j].dt_txt.split(' ')[1];
      if (time == '12:00:00')
        weather[i] = this.props.info.list[i];
        i++;
      }
    const items = weather.map((item) => <div className="week-forecast__day" key={item.dt}>
      <img src={require('./img/weather-icons/' + item.weather[0].icon + '.svg')} alt="weather icon"/>
      <div className="week-forecast__day-text">{ item.dt_txt.split(' ')[0].split('-')[2] }.{ item.dt_txt.split(' ')[0].split('-')[1] }</div>
      <div className="week-forecast__day-text">{ item.main.temp.toFixed(1) } &#176;C</div>
      </div>);
    return (
      <div className="week-forecast">
        {items}
      </div>
    );
  }
}

export default WeekInfo;
