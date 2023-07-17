import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import { useState } from "react";
let age = 22;
let college = "Chandigarh University";

function App() {
  const [name, setName] = useState("Rohan");
  return (
    <div className="App">
      <h1>Class Based Component</h1>
      <ClassComponent />
      <br />
      <h1>Functional Component</h1>
      <FunctionalComponent
        name={name}
        age={age}
        college={college}
        setName={setName}
      />
      <br />
    </div>
  );
}

export default App;
