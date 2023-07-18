import React from "react";
import BaseHoc from "../hoc/BaseHoc";
import { useEffect } from "react";
import { useState } from "react";

const FunctionalComponent = (props) => {
  const [count, setCount] = useState(1);
  const [changeName, setChangeName] = useState("");
  const prevRef = React.useRef(changeName);

  useEffect(() => {
    console.log("Component Did Mount");
  }, []); // This is called dependency array

  useEffect(() => {
    console.log("Component Did Update");
  }, []);

  useEffect(() => {
    console.log("On Change of Name");
  }, [changeName]);

  useEffect(() => {
    console.log("Change of Props");
  }, [props]);

  //Use of useEffect on previous Reference of change of name by actually using const prevRef = useRef(changeName);
  useEffect(() => {
    console.log("Change of Reference Name");
    console.log(prevRef.current);
    prevRef.current = changeName;
  }, [changeName]);

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

export default BaseHoc(FunctionalComponent);
