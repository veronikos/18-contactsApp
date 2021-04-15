import React, { Component } from "react";

class Search extends Component {
  state = {
    searchText: "",
    checkFemale: false,
    checkMale: false,
    checkOther: false
  };

  changeSearchText = (event) => {
    this.setState({ searchText: event.target.value });
  };

  sortContacts = () => {
    if(this.state.searchText !== '') {
      this.props.addSearchName(this.state.searchText)
      this.setState({searchText: ''})
    }
  }

  handleCheckFemale = () => {
    this.setState({checkFemale: !this.state.checkFemale});
    this.props.addSearchName(this.state.checkFemale)
    console.log(this.state.checkFemale)
  }

  render() {
    return (
      <div className="Search">
        <input
          className="search"
          type="text"
          placeholder="Search contacts..."
          value={this.state.searchText}
          onChange={this.changeSearchText}
        />
        <button className="searchButton" type="submit" onClick={this.sortContacts}></button>
        <div className="checkBoxes">
            <input type="checkbox" id="Female" defaultChecked='true' onChange={this.handleCheck}></input>
            <label htmlFor="Female" defaultChecked='true' onChange={this.handleCheck}>Female</label>
            <input type="checkbox" id="Male"></input>
            <label htmlFor="Male" defaultChecked='true' onChange={this.handleCheck}>Male</label>
            <input type="checkbox" id="Other"></input>
            <label htmlFor="Other">Other</label>
        </div>
      </div>
    );
  }
}

export default Search;
