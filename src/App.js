import React from "react";
import Random from "./Components/Random";
import Tag from "./Components/Tag";
const App = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row text-center mt-5">
          <div className="d-flex justify-content-center">
            <h1 className="fs-2 fw-bold p-2 w-75">Random GIF Application</h1>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Random />
            <Tag />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
