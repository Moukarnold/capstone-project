import React from "react";

export default function Difficulty(props) {
  const { config, setConfig } = props;

  function handleDifficulty(event) {
    setConfig({ ...config, difficulty: event.target.value });
  }
  return (
    <div>
      <select
        required
        name="difficulty-select"
        id="difficulty-select"
        value={config.difficulty}
        onChange={handleDifficulty}
      >
        <option value="">--Please choose an option--</option>
        <option value="Basic">Basic</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
    </div>
  );
}
