import { useState } from "react";

function Math() {

  const [mathA, setMathA] = useState("");

  const [mathB, setMathB] = useState("");


  const onMathaChange = (event) => {
    setMathA(event.target.value);
  };

  const onMathbChange = (event) => {
    setMathB(event.target.value);
  };


  const sum = (+mathA) + (+mathB);

  console.log(sum);

  return (
    <div className="Math">

      <div>
        {mathA} {mathB}
      </div>

      <label>
        A:
        <input type="text" onChange={onMathaChange}/>
      </label>
      

      <label>
        B:
        <input type="text" onChange={onMathbChange}/>
      </label>

      <div>
        A + B = {sum}
      </div>
    </div>
  );
}

export default Math;