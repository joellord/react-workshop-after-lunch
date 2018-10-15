import React, { Component } from "react";
import store from "../../utils/Store";
import { getWeatherData } from "../../utils/WeatherAPI";

export default class CityForm extends Component {
  constructor(props) {
    super(props);

    this.state = store.getGlobalState();
    this.updateState = this.updateState.bind(this);
  }

  componentWillMount() {
    store.subscribe(this.updateState);
  }

  componentWillUnmount() {
    store.unsubscribe(this.updateState);
  }

  updateState() {
    this.setState(store.getGlobalState());
  }

  handleSearchTermChange(event) {
    store.updateGlobalState({
      searchTerm: event.target.value
    });
  }

  updateWeatherData() {
    getWeatherData();
  }

  render() {
    return (
      <form  className="form-inline">
        <div className="col-7"></div>
        <div className="col-2">
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
          />
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.updateWeatherData}
          >Get weather</button>
        </div>
      </form>
    )
  }
}