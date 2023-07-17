import React from "react";
import { useState } from "react";

const FunctionalComponent = (props) => {
  const [count, setCount] = useState(1);
  const [changeName, setChangeName] = useState("");

  return (
    <div>
      <h1>
        Functional Component.
        <br />
        My name is {props.name}. <br /> My age is {props.age}. <br />
        My College is {props.college}
      </h1>
      <h2>Count:</h2>{" "}
      <button onClick={() => setCount(count + 1)}>Click me</button> {count}
      <br />
      <input onChange={(e) => setChangeName(e.target.value)} /> <br />
      <button onClick={() => props.setName(changeName)}>
        Click Me to Change Name
      </button>
      <br />
      {/* <button onClick={() => props.setName("Rohan")}>
        Click Me to Change Name Back
      </button> */}
      <br />
    </div>
  );
};

export default FunctionalComponent;
