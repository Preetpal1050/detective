import React from "react";
import Characters from "./components/Characters";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Deep Fake Detective</h1>
        <p>Unmask the fake!</p>
      </header>
      <main className="App-container">
        <h2>Upload a File to Detect Deep Fakes</h2>
        <input type="file" id="fileInput" />
        <button>Upload</button>
        <Characters />
        <p>Identify and detect deep fakes with ease.</p>
      </main>
    </div>
  );
};

export default App;
