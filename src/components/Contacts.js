import React from "react";
import Person from "./Person";

const array = [
    {
        firstName: 'Veronika',
        lastName:'Kostenko',
        phone: '+094r7248294',
        gender: 'female'
    },
    {
        firstName: 'Monika',
        lastName:'Kostenko',
        phone: '+094r7248294',
        gender: 'female'
    }
]

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

function Contacts() {
  return (
    <div class="Contacts">
        {contacts.map(person => <Person {...person} key={person.id}/>)}
    </div>
  );
}

export default Contacts;
