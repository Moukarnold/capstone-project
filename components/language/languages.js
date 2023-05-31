import { useState } from "react";

const LanguageItems = [
  {
    label: "🇬🇧 English",
    value: " English",
  },
  { label: " 🇫🇷 French", value: " French" },
  { label: "🇩🇪 Deutsch", value: " Deutsch" },
];

export default function PageLanguage(props) {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  function handleLanguage(event) {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
    props.handleLanguage(selectedLanguage);
  }

  return (
    <select
      name="Languages"
      // value={setLanguages}
      onChange={handleLanguage}
    >
      {LanguageItems.map((item) => (
        <option
          //selected={languages === item.value}
          value={item.value}
          key={item.value}
        >
          {item.label}
        </option>
      ))}
    </select>
  );
}
