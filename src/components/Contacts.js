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
    filteredContacts: [],
    searchName: []
  }

  addSearchName = data => {
    this.setState({searchName: this.state.searchName.concat(data)})

    console.log(data)
   
    const filtered = this.state.contacts
    .filter((el) =>
      el.lastName.toLowerCase().startsWith(data.toLowerCase()) ||
      el.firstName.toLowerCase().startsWith(data.toLowerCase()) ||
      el.phone.includes(data))

    this.setState({filteredContacts: filtered})
    console.log(this.state.filteredContacts)
     
    if (!data) {
      this.setState({filteredContacts: this.state.contacts})
     }
  }

  render() {

    return (
      <div className="Contacts">
        <Search addSearchName={this.addSearchName} />
        {this.state.filteredContacts
          .map((person) => (
            <Person {...person} key={person.index} />
          ))}
      </div>
    );
  }
}

export default Contacts;