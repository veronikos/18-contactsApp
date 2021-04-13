import React, {Component} from "react";
import Person from "./Person";
import Search from "./Search";

const contacts = [{
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
  }];

class Contacts extends Component {
  
  state = {
    searchName: []
  }

  addSearchName = data => {
    this.setState({searchName: this.state.searchName.concat(data)}) 
  }

  // const filtered = contacts
  // .sort((a, b) => (a.lastName.startsWith("Теод") || a.firstName.startsWith("Теод")) ? -1 : (a.lastName < b.lastName) ? -1 : 1)
  // console.log(filtered)

  render() {

    const dataFromInput = this.state.searchName[this.state.searchName.length - 1]

    return (
      <div className="Contacts">
        <Search addSearchName={this.addSearchName} />
        {contacts
          .sort((a, b) =>
            a.lastName.toLowerCase().startsWith(
              dataFromInput
            ) ||
            a.firstName.toLowerCase().startsWith(
              dataFromInput
            ) ? -1 : a.lastName < b.lastName ? -1 : 1)
          .map((person) => (
            <Person {...person} key={person.index} />
          ))}
      </div>
    );
  }
}

export default Contacts;