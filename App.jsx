import React, { useState } from "react";
import "./App.css";
import AboutUs from "./AboutUs";

const App = () => {
  const [started, setStarted] = useState(false);

  return (
    <div>
      {!started ? (
        <div className="landing">
          <h1>Paradise Nursery</h1>
          <button onClick={() => setStarted(true)}>Get Started</button>
        </div>
      ) : (
        <AboutUs />
      )}
    </div>
  );
};

export default App;
