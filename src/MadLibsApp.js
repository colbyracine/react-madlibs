import React, { useState } from "react";

function MadlibsForm({ onSubmit }) {
  const [noun, setNoun] = useState("");
  const [noun2, setNoun2] = useState("");
  const [adjective, setAdjective] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(noun, noun2, adjective, color);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Noun:
        <input
          type="text"
          value={noun}
          onChange={(e) => setNoun(e.target.value)}
        />
      </label>
      <br />
      <label>
        Second Noun:
        <input
          type="text"
          value={noun2}
          onChange={(e) => setNoun2(e.target.value)}
        />
      </label>
      <br />
      <label>
        Adjective:
        <input
          type="text"
          value={adjective}
          onChange={(e) => setAdjective(e.target.value)}
        />
      </label>
      <br />
      <label>
        Color:
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Create Madlib</button>
    </form>
  );
}

function MadlibsDisplay({ noun, noun2, adjective, color }) {
  return (
    <div>
      The {adjective} {noun} jumped over the {color} {noun2}.
    </div>
  );
}

function MadlibsApp() {
  const [noun, setNoun] = useState("");
  const [noun2, setNoun2] = useState("");
  const [adjective, setAdjective] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (noun, noun2, adjective, color) => {
    setNoun(noun);
    setNoun2(noun2);
    setAdjective(adjective);
    setColor(color);
  };

  return (
    <div>
      <MadlibsForm onSubmit={handleSubmit} />
      <MadlibsDisplay
        noun={noun}
        noun2={noun2}
        adjective={adjective}
        color={color}
      />
    </div>
  );
}

export default MadlibsApp;
