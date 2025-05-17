import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  const card = {
    name: "Fahim Ullah",
    skill: "Developer",
    bio: "Loves building modern web apps with React and Node.js.",
    image: [1, 2, 3, 4],
  };
  const cardImage = {
    one: 1,
    two: "2",
    three: "3",
  };
  return (
    <>
      <h1 class=" mb-3 bg-green-500 rounded-2xl p-10 font-bold text-3xl">
        Hello! Check Tailwind CSS And Props
      </h1>

      {/* for single components */}

      {/* <div>
        simple value
        <>card {(name = "Fahim Ullah")}</>
        Variable
        <>card name{name}</>
        for Object
        <>card card={card}</> or
        <>
          card name ={card.name}, bio={card.bio}{" "}
        </>
      </div> */}

      {/* For multiple components */}
      <div className="card flex flex-direction-row gap-4">
        <Card
          name={card.name}
          bio={card.bio}
          skill={card.skill}
          image={cardImage.one}
        />
        <Card
          name={card.name}
          bio={card.bio}
          skill={card.skill}
          image={cardImage.two}
        />
        <Card
          name={card.name}
          bio={card.bio}
          skill={card.skill}
          image={cardImage.three}
        />
      </div>
    </>
  );
}

export default App;
