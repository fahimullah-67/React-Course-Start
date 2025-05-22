import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="flex justify-center text-3xl font-bold py-3 my-10 bg-gray-700 text-orange-700">
        React Router Project
      </h1>
    </>
  );
}

export default App;
