import React, { Component } from "react";

class Search extends Component {
  state = {
    searchText: "",
  };

  changeSearchText = (event) => {
    this.setState({ searchText: event.target.value });
    this.props.addSearchName(this.state.searchText)
  };

  render() {
    return (
      <div className="Search">
        <input
          type="text"
          placeholder="Search contacts..."
          value={this.state.searchText}
          onChange={this.changeSearchText}
        />
        {/* <div>
          <input type="radio" id="radioButton"></input>
          <input type="radio" id="radioButton"></input>
          <input type="radio" id="contactChoice1" name="contact" value="email"></input>
          <label for="contactChoice1">Email</label>
        </div> */}
      </div>
    );
  }
}

export default Search;
