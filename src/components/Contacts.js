import React, { Component } from "react";
import Person from "./Person";

let contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

class Contacts extends Component {
  state = {
    contacts: contacts,
    search: "",
  };

  handleSearchChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    this.setState({
      search: e.target.value,
      contacts: contacts.filter(
        (contact) =>
          contact.lastName.toLowerCase().includes(inputValue) ||
          contact.firstName.toLowerCase().includes(inputValue) ||
          contact.phone.includes(inputValue)
      ),
    });
  };

  render() {
    return (
      <div className="Contacts">
        <input
          type="text"
          placeholder="Search contacts..."
          value={this.state.search}
          onChange={this.handleSearchChange}
        />
        {this.state.contacts.map((person, i) => (
          <Person {...person} key={i} />
        ))}
      </div>
    );
  }
}

export default Contacts;
