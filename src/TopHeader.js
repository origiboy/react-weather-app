import React from 'react';

class TopHeader extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      city: this.props.city,
      time: ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2),
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.city !== this.props.city) {
      this.setState({
        city: nextProps.city,
      });
    }
  }
  tick() {
    const date = new Date();
    this.setState({
      time: ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2),
    });
  }
  render() {
    return (
      <div className="header">
        <div className="header__text">
          Погода в городе: <span>{ this.state.city }</span>
        </div>
        <div className="header__time">{ this.state.time }</div>
      </div>
    );
  }
}

export default TopHeader;
