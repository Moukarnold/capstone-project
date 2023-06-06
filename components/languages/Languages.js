import React from "react";

export default function Languages(props) {
  const { config, setConfig } = props;

  function handleLanguages(event) {
    setConfig({ ...config, language: event.target.value });
  }

  return (
    <div>
      <select
        required
        name="lang-select"
        id="lang-select"
        value={config.language}
        onChange={handleLanguages}
      >
        <option value="">--Please choose an option--</option>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="German">German</option>
      </select>
    </div>
  );
}
