import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <p>Please Login</p>;

  return (
    <div>
      <h1>
        WellCome <span className="font-bold">{user.userName}</span>
      </h1>
      <h1>Your Password is "{user.password}"</h1>
    </div>
  );
}

export default Profile;
