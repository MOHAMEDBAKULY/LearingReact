import { func } from "prop-types";
import { useEffect, useState } from "react";

export default function App() {
  const [joke, setJoke] = useState([]);
  const [num, setNum] = useState(0);

  async function getPunchlines() {
    const res = await fetch(
      "https://official-joke-api.appspot.com/jokes/random"
    );
    const data = await res.json();

    setJoke(data);
    setNum((n) => n + 1);
  }

  useEffect(function () {
    getPunchlines();
  }, []);

  return (
    <div className="app">
      <div>Type: {joke.type}</div>
      <div>Setup: {joke.setup}</div>
      <div>Punchline: {joke.punchline}</div>
      <button onClick={getPunchlines}>Click me </button>
      <Message num={num} />
    </div>
  );
}

function Message({ num }) {
  return (
    <p>
      You have read <b>{num}</b> punchlines today
    </p>
  );
}
