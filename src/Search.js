import React from 'react';
import {sun} from './functions.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sunStyles: sun(this.props.sunriseSeconds, this.props.sunsetSeconds),
      value: '',
    }
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onClick() {
      this.props.buttonSearchClick(this.state.value);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
        <div className="search">
          <div className="search__field">
            <input className="search__field-input" placeholder="Дубай" value={ this.state.value } onChange={ this.handleChange } />
          </div>
          <button className="search__button" onClick={this.onClick}></button>
        </div>
    );
  }
}

export default Search;
