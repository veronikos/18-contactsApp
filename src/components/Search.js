import React, { Component } from "react";

class Search extends Component {
  state = {
    searchText: "",
  };

  changeSearchText = (event) => {
    this.setState({ searchText: event.target.value });
  };

  sortContacts = () => {
    const data = {
      searchText: this.state.searchText,
    }

    if(this.state.searchText !== '') {
      this.props.addSearchName(data.searchText)
      this.setState({searchText: ''})
    }
  }

  render() {
    return (
      <div className="Search">
        <input
          type="text"
          placeholder="Search contacts..."
          value={this.state.searchText}
          onChange={this.changeSearchText}
        />
        <button type="submit" onClick={this.sortContacts}></button>
      </div>
    );
  }
}

export default Search;
