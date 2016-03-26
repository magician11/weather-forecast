import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherData } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeatherData(this.state.term);
    this.setState({ term: ''} );
  }

  render() {
    return (
      <form
        className="input-group col-md-6 col-md-offset-3 search-bar"
        onSubmit={ this.onFormSubmit.bind(this) }
      >
        <input
          type="text"
          value={ this.state.term }
          className="form-control"
          placeholder="Enter a city for a weather forecast"
          onChange={ this.onInputChange.bind(this) }
      />
      <span className="input-group-btn">
      <button type="submit" className="btn btn-default">Search</button>
      </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeatherData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
