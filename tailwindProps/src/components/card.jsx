import React from "react";

function Card({ name, bio, skill, image }) {
  //   let CardImage = { cardImage };
  console.log("image : ", { image });

  return (
    (<h1>Hello</h1>),
    (
      <div class="bg-white shadow-xl rounded-xl p-6 w-100 text-center">
        <img
          src={`https://randomuser.me/api/portraits/men/${image}.jpg`}
          alt="Profile"
          class="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 class="text-xl font-bold text-black">{name}</h2>
        <p class="text-gray-600">{skill}</p>
        <p class="text-sm mt-2 text-gray-500">{bio}</p>
        <button class="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          Follow
        </button>
      </div>
    )
  );
}

export default Card;
