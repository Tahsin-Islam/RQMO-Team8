import React, { useState } from "react";
import './css/App.css';
import HomePage from "./Home";
import TopBar from "./topBar";

function App() {
  // Declare the state and setter function
  const [contextText, setContextText] = useState(<HomePage />);

  return (
    <div className="App">
      {/* Pass setContextText as a prop named setContentText */}
      <TopBar setContentText={setContextText}></TopBar>
      {contextText}
    </div>
  );
}

export default App;
