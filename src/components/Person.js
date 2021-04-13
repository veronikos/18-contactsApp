import React from 'react'

function Person({firstName, lastName, phone, gender}) {

    return (
        <div className="Person">
            <p className={gender}>
            </p>
                <p className="Name">{firstName} {lastName}</p>
            <div className="phone">{phone}</div>
        </div>
    );
  }
  
  export default Person;