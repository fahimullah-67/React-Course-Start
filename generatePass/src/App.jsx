import { useCallback, useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [charAllow, setCharAllow] = useState(false);
  const [numberAllow, setNumberAllow] = useState(false);
  const [password, setPassword] = useState("");

  // UseRef hoke
  const passwordRef = useRef();
  // UseRef is used to create a mutable object which holds a .current property

  const passwordGenerator = useCallback(() => {
    const Alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const char = "!@#$%^&*()_+[]{}|;:,.<>?";

    let pass = "";
    let charSet = Alpha;

    if (charAllow) {
      charSet += char;
    }
    if (numberAllow) {
      charSet += number;
    }
    for (let i = 1; i <= length; i++) {
      pass += charSet.charAt(Math.floor(Math.random() * charSet.length + 1));
    }
    setPassword(pass);
  }, [charAllow, numberAllow, length, setPassword]);

  // copy password to clipboard
  // navigator.clipboard is a web API that allows you to interact with the clipboard

  const copyPasswordClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 16);
    navigator.clipboard.writeText(password);
    alert("Password copied to Clipboard");
  }, [password]);

  // useCallback is used to memoize the function so that it doesn't get recreated on every render
  // useEffect is used to call the passwordGenerator function whenever the dependencies change
  // This is useful when you want to generate a new password whenever the user changes the length or the character set

  useEffect(() => {
    passwordGenerator();
  }, [charAllow, numberAllow, length, setPassword, passwordGenerator]);

  return (
    <>
      <div className="flex flex-col justify-start items-center h-screen bg-gray-200">
        <div className="flex justify-center flex-col gap-3 align-items-center w-full max-w-lg mx-auto my-10 bg-gray-500 text-orange-500 rounded-lg shadow-lg px-4 overflow-hidden">
          <h1 className="text-4xl font-bold my-3 mx-auto">
            Password Generator
          </h1>
          <div className="flex justify-center align-items-center w-md">
            <input
              className="bg-gray-200 text-gray-700 outline-none w-full font-bold px-3 py-1  rounded-l-lg shadow-lg"
              type="text"
              value={`${password}`}
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
            <button
              type="button"
              className="bg-blue-500 text-white font-bold py-1 px-3 rounded-r-lg shadow-lg"
              onClick={copyPasswordClipboard}
            >
              Copy
            </button>
          </div>
          <div className="flex justify-center align-items-center w-md my-2">
            <input
              type="range"
              id="length"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">Length :{length}</label>
            <input
              type="checkbox"
              id="char"
              defaultChecked={charAllow}
              className="mx-1"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="char">Special Characters</label>
            <input
              type="checkbox"
              id="number"
              defaultChecked={numberAllow}
              className="mx-1"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label htmlFor="number">Numbers</label>
          </div>

          <button
            type="button"
            className="bg-blue-500 text-white font-bold py-2 px-4 mb-3 rounded-lg shadow-lg"
            onClick={passwordGenerator}
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
