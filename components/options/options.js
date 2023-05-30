import { useState } from "react";

const optionItems = [
  {
    label: "Simple Sentences & For Kids",
    value: "simple sentences and for kids",
  },
  { label: "Poemes", value: "Poemes" },
  { label: "Jokes", value: "Jokes" },
];
export default function PageOptions(props) {
  const [selectedOptions, setSelectedOptions] = useState("");

  function handleOption(event) {
    const selectedOptions = event.target.value;
    setSelectedOptions(selectedOptions);
    props.handleOption(selectedOptions);
  }

  return (
    <select name="options" onChange={handleOption}>
      {optionItems.map((item) => (
        <option
          // selected={options === item.value}
          value={item.value}
          key={item.value}
        >
          {item.label}
        </option>
      ))}
    </select>
  );
}
