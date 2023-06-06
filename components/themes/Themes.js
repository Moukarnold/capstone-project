import React from "react";

export default function Themes(props) {
  const { config, setConfig } = props;
  function handleThemes(event) {
    setConfig({ ...config, theme: event.target.value });
  }

  return (
    <div>
      <select
        required
        name="theme-select"
        id="theme-select"
        value={config.theme}
        onChange={handleThemes}
      >
        <option>--Please choose an option--</option>
        <option value="Poems">Poems</option>
        <option value="Jokes">Jokes</option>
        <option value="For Kids">For Kids</option>
      </select>
    </div>
  );
}
