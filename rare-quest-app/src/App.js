import React, { useState } from "react";
import './css/App.css';
import HomePage from "./Home";
import TopBar from "./topBar";

function App() {
  // Using useState to manage state
  const [contextText, setContextText] = useState(<HomePage/>);

  return (
    <div className="App">
      {/* Pass setContextText as a prop named setContentText */}
      <TopBar setContentText={setContextText}></TopBar>
      {contextText}
    </div>
  );
}

export default App;
