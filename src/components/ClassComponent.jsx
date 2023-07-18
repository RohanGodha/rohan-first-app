import React from "react";
import BaseHoc from "../hoc/BaseHoc";
class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, This is Rohan Godha here. {this.props.name} </h1>
      </div>
    );
  }
}

export default BaseHoc(ClassComponent);
