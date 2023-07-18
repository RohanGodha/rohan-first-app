import React from "react";
const BaseHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <h1>Base Hoc Starts Below</h1>
        <Component {...props} />
        <h1>Base Hoc Ends Above</h1>
      </div>
    );
  };
export default BaseHoc;
