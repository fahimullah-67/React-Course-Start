import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // With out using loader
  //   const [data, setData] = useState([]);
  //   const token = import.meta.env.VITE_GITHUB_TOKEN;

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/fahimullah-67", {
  //       headers: {
  //         Authorization: `token ${token}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       })
  //       .catch((err) => {
  //         console.error("Error:", err);
  //       });
  //   }, []);

  return (
    <div className=" text-center bg-gray-700 text-white py-5 font-bold text-3xl">
      {data ? (
        <div>
          <h1 className="text-4xl">Github User : {data.login}</h1>
          <div className="flex flex-row justify-start items-center gap-10">
            <img
              className="mx-3 rounded-full"
              src={data.avatar_url}
              alt="Avatar"
              width="300"
            />
            <div className="text-left space-y-1">
              <p>Name: {data.name}</p>
              <p>Followers: {data.followers}</p>
              <p>Followings: {data.following}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  const response = await fetch("https://api.github.com/users/fahimullah-67", {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  return response.json();
};
