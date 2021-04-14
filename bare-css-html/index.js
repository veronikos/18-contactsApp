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

//   const filteredsorted = contacts.sort((a, b) => (a.lastName === "Еріксонян") ? -1 : (a.lastName < b.lastName) ? -1 : 1)
//   console.log(filteredsorted)

  const filtered = contacts.sort((a, b) => (a.lastName.startsWith("Теод") || a.firstName.startsWith("Теод")) ? -1 : (a.lastName < b.lastName) ? -1 : 1)
  console.log(filtered)