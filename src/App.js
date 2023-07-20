import React, { useState, useEffect } from "react";
import TwoPart from "./TwoPart";
import SingleJoke from "./SingleJoke";

function App() {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    getJoke();
  }, []);

  function getJoke() {
    fetch("https://v2.jokeapi.dev/joke/Programming")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
        console.log(data);
      });
  }
   useEffect(() =>{
    getJoke();
   }, []);
  return (
    <div className="app">
      <h2 className="heading">😂 Jokes! 😂</h2>
      {joke.type === "single" ? (
        <SingleJoke joke={joke.joke} />
      ) : (
        <TwoPart setup={joke.setup} delivery={joke.delivery} />
      )}

      <div className="buttons">
        <button className="another" onClick={getJoke}>
          Another Joke!😆
        </button>
      </div>
    </div>
  );
}

export default App;
