import { useState } from "react";

function Example() {

  const [firstName, setFisrtName] = useState("");
  const [lastName, setLastName] = useState("");


  const onFirstNameChange = (event) => {
    setFisrtName(event.target.value);
  };

  const onLastNameChange = (event) => {
    setLastName(event.target.value);
  };


  return (
    <div className="Example">
      <div>
        {firstName} {lastName}
      </div>
      <label>
      First name:
        <input type="text" onChange={onFirstNameChange}/>
      </label>
      <label>
        Last name:
        <input type="text" onChange={onLastNameChange}/>
      </label>
    </div>
  );
}


export default Example;