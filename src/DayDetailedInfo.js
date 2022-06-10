import React from 'react';

class DayDetailedInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="day-detailed-info">
          <div className="day-detailed-info__point">Влажность: { this.props.info.main.humidity }%</div>
          <div className="day-detailed-info__point">Скорость ветра: { this.props.info.wind.speed } м/с</div>
          <div className="day-detailed-info__point">Порывы ветра: { this.props.info.wind.gust } м/с</div>
          <div className="day-detailed-info__point">Навправление ветра: { this.props.info.wind.deg  }&#176; </div>
        </div>
    );
  }
}

export default DayDetailedInfo;
