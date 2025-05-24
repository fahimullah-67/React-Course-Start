import React, { useState } from "react";
import UserContext from "./UserContext";

const contextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default contextProvider;
