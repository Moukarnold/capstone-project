import { useState } from "react";
import twisters from "/public/twisters";

export default function HomePage() {
  const [config, setConfig] = useState({
    language: "",
    theme: "",
    difficulty: "",
  });

  const selectedTwister = twisters.find((twister) => {
    return (
      twister.language === config.language &&
      twister.theme === config.theme &&
      twister.difficulty === config.difficulty
    );
  });

  return (
    <>
      <h2> tongue twister</h2>

      <label htmlFor="lang-select">Language:</label>
      <select
        required
        name="lang-select"
        id="lang-select"
        value={config.language}
        onChange={(event) => {
          setConfig({ ...config, language: event.target.value });
        }}
      >
        <option value="">--Please choose an option--</option>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="German">German</option>
      </select>
      <br />
      <label htmlFor="lang-select">Theme:</label>
      <select
        required
        name="theme-select"
        id="theme-select"
        value={config.theme}
        onChange={(event) => {
          setConfig({ ...config, theme: event.target.value });
        }}
      >
        <option value="">--Please choose an option--</option>
        <option value="Poems">Poems</option>
        <option value="Jokes">Jokes</option>
        <option value="For Kids">For Kids</option>
      </select>
      <br />
      <label htmlFor="lang-select">Difficulty:</label>
      <select
        required
        name="difficulty-select"
        id="difficulty-select"
        value={config.difficulty}
        onChange={(event) => {
          setConfig({ ...config, difficulty: event.target.value });
        }}
      >
        <option value="">--Please choose an option--</option>
        <option value="Basic">Basic</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
      <br />

      <hr />

      {selectedTwister?.tongue_twister}
    </>
  );
}
