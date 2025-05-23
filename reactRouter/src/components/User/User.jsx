import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <div
      className="flex justify-center items-center bg-gray-500 text-3xl text-white
   py-3 font-bold"
    >
      User: {userid}
    </div>
  );
}

export default User;
