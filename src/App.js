import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BaseHoc from "./hoc/BaseHoc";
let age = 22;
let college = "Chandigarh University";

function App() {
  const [name, setName] = useState("Rohan");
  return (
    <div>
      <Routes>
        <Route path="/" element={<ClassComponent />} />
        <Route
          path="/functional"
          element={
            <FunctionalComponent
              name={name}
              age={age}
              college={college}
              setName={setName}
            />
          }
        />
      </Routes>
      <BaseHoc />
    </div>

    // <div className="App">
    //   <h1>Class Based Component</h1>
    //   <ClassComponent />
    //   <br />
    //   <h1>Functional Component</h1>
    //   <FunctionalComponent
    //     name={name}
    //     age={age}
    //     college={college}
    //     setName={setName}
    //   />
    //   <br />
    // </div>
  );
}

export default App;
