import { useState, useContext } from "react";
import "./App.css";
import Login from "./Componenets/Login";
import Profile from "./Componenets/Profile";
import UserContext from "./Context/UserContext";
import UserProvider from "./Context/UserProvider";

function App() {
  return (
    <UserProvider>
      <div className=" text-center bg-gray-700 h-screen text-white">
        <h1 className=" text-3xl p-10 ">Hello Mini Context Page is here.</h1>

        <Login />
        <p className="text-2xl">Login to see your profile</p>
        <Profile />
      </div>
    </UserProvider>
  );
}

export default App;
