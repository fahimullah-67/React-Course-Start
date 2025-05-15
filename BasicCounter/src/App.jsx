import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let count = 0;
  let [count, setCount] = useState(5);

  const addValue = () => {
    if (count === 20) {
      alert("Count is already 20");
      return;
    }
    // count = count + 1;
    setCount(count + 1);
    console.log(count);
  };

  const removeValue = () => {
    if (count === 0) {
      alert("Count is already 0");
      return;
    }
    setCount(count - 1);
    console.log(count);
  };
  const ResetValue = () => {
    if (count === 0) {
      alert("Count is already 0");
      return;
    }
    // count = 0;
    setCount(0);
    console.log(count);
  };
  return (
    <>
      <h1>Basic Counter</h1>
      <h2>Count {count}</h2>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Subtract</button>
      <button onClick={ResetValue}>Reset</button>
    </>
  );
}

export default App;
