import React, {Component} from "react";
import Person from "./Person";
import Search from "./Search";

class Contacts extends Component {
  
  state = {
    contacts: [{
      firstName: "Барней",
      lastName: "Стинсовський",
      phone: "+380956319521",
      gender: "male"
    }, {
      firstName: "Робін",
      lastName: "Щербатська",
      phone: "+380931460123",
      gender: "female"
    }, {
      firstName: "Анонімний",
      lastName: "Анонімус",
      phone: "+380666666666"
    }, {
      firstName: "Лілія",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female"
    }, {
      firstName: "Маршен",
      lastName: "Еріксонян",
      phone: "+380739432123",
      gender: "male"
    }, {
      firstName: "Теодор",
      lastName: "Мотсбес",
      phone: "+380956319521",
      gender: "male"
    }],
    searchName: []
  }

  addSearchName = data => {
    this.setState({searchName: this.state.searchName.concat(data)})

    console.log(this.state.searchName)

    this.setState({contacts: this.state.contacts
          .sort((a, b) =>
            a.lastName.toLowerCase().startsWith(data) ||
            a.firstName.toLowerCase().startsWith(data) ||
            a.phone.includes(data)
            ? -1 : a.lastName < b.lastName ? -1 : 1)})
  }

  handleSearchChange = () => {

  }

  render() {

    return (
      <div className="Contacts">
        <Search addSearchName={this.addSearchName} />
        {this.state.contacts
          .map((person) => (
            <Person {...person} key={person.index} />
          ))}
      </div>
    );
  }
}

export default Contacts;