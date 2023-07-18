import React from "react";
import BaseHoc from "../hoc/BaseHoc";
// const [state, setState] = useState("10");
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rohan Godha",
      age: 10,
    };
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }
  componentWillUnmount() {
    console.log("Component Did Mount");
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  render() {
    console.log("Render:");
    return (
      <div>
        <h1>Hello, This is Rohan Godha here. {this.props.name} </h1>
        <button
          onClick={() =>
            this.setState({ ...this.state, age: this.state.age + 1 })
          }
        >
          Add 1 to Age
        </button>
        <h1>This is updating Age: {this.state.age}</h1>
      </div>
    );
  }
}

export default BaseHoc(ClassComponent);
