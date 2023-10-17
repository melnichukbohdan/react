import React, {useState} from "react";
import './App.css';
import Counter from "./Components/Counter/Counter";
import ClassCounter from "./Components/Counter/ClassCounter";

function App() {
  return (
    <div className="App">
        <ClassCounter />
    </div>
  );
}

export default App;
