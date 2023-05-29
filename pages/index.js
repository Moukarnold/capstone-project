import { ContainerMain } from "@/components/styledComponents/Container.styled";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import PageLanguage from "./languages";
import PageLevel from "./level";
import PageOptions from "./options";

export default function HomePage() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedOptions, setSelectedOptions] = useState(
    "Simple Sentences & For Kids"
  );
  const [selectedLevels, setSelectedLevels] = useState("Basic");
  //const apiUrl = "https://jsonplaceholder.typicode.com/todos/";

  function handleOption(option) {
    setSelectedOptions(option);
    console.log("option est " + option);
  }
  function handLeLevel(level) {
    setSelectedLevels(level);
    console.log(" le Level" + level);
  }

  function handleLanguage(language) {
    setSelectedLanguage(language);
    console.log("la langue est " + language);
  }

  return (
    <>
      <ContainerMain>
        <h2> Homepage</h2>
        <h2> Languages</h2>
        <PageLanguage handleLanguage={handleLanguage} />
        <h2> Options</h2>
        <PageOptions handleOption={handleOption} />
        <h2> Levels </h2>
        <PageLevel handLeLevel={handLeLevel} />
        <StyledLink href={"/next"}> Next</StyledLink>
      </ContainerMain>
    </>
  );
}

const StyledLink = styled(Link)`
  box-shadow: 10px 5px 5px gray;
`;
