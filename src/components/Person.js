import React from 'react'

function Person({firstName, lastName, phone, gender}) {

    return (
        <div class="Person">
            <p class={gender}>
            </p>
                <p class="Name">{firstName} {lastName}</p>
            <div class="phone">{phone}</div>
        </div>
    );
  }
  
  export default Person;