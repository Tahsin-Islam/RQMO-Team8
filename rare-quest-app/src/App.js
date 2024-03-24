import React, { useState } from "react";
import './css/App.css';
import HomePage from "./Home"
import TopBar from "./topBar"

function App() {
  // Using useState to manage state
  const [contextText, setContextText] = useState(<HomePage/>);
  const [Brokering, setbrokering] = useState(false);


  return (
    <div className="App">
      {/* Render the content of contextText */}
      <TopBar setContextText={setContextText} setbrokering={setbrokering} Brokering={Brokering}></TopBar>
      {contextText}
    </div>
  );
}

export default App;
