import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleUser = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };

  return (
    <div className="flex justify-center text-center text-white ">
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="outline-1 mx-2"
      />{" "}
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="outline-1"
      />
      <button onClick={handleUser}>Submit</button>
    </div>
  );
}

export default Login;
