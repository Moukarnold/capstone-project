import { ContainerMain } from "@/components/styledComponents/Container.styled";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import PageLanguage from "../components/language/languages";
import PageLevel from "../components/level/level";
import PageOptions from "../components/options/options";
import frenchData from "./french.json";

export default function HomePage() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedOptions, setSelectedOptions] = useState(
    "Simple Sentences & For Kids"
  );
  const [selectedLevels, setSelectedLevels] = useState("Basic");

  function handleNext(props) {
    // Récupérez la langue, les options et le niveau sélectionnés
    const language = selectedLanguage;
    const options = selectedOptions;
    const level = selectedLevels;

    // Générez le virelangue
    generateTongueTwister(language, options, level)
      .then((tongueTwister) => {
        console.log(tongueTwister);
        // Faites quelque chose avec le virelangue généré, par exemple, affichez-le à l'utilisateur
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la génération du virelangue :",
          error
        );
      });

    /*
      +++ call the togue twister from json+++++

    function getRandomSentence() {
      // Sélectionner une catégorie au hasard
      const randomCategoryIndex = Math.floor(Math.random() * frenchData.length);
      const category = frenchData[randomCategoryIndex];

      // Sélectionner une phrase au hasard dans la catégorie
      const sentences = Object.values(category)[0];
      const randomSentenceIndex = Math.floor(Math.random() * sentences.length);
      const randomSentence = Object.values(sentences[randomSentenceIndex])[0];

      return randomSentence;
    

    // Obtenir une phrase aléatoire
    const randomSentence = getRandomSentence();
    console.log(randomSentence);*/
  }

  function handleOption(option) {
    setSelectedOptions(option);
    console.log("option est " + option);
  }
  function handLeLevel(level) {
    setSelectedLevels(level);
    console.log("  Level est" + level);
  }

  function handleLanguage(language) {
    setSelectedLanguage(language);
    console.log(" language est " + language);
  }

  return (
    <>
      <ContainerMain>
        <h2> Homepage</h2>
        <h2> Text Language </h2>
        <PageLanguage handleLanguage={handleLanguage} />
        <h2> Text Option</h2>
        <PageOptions handleOption={handleOption} />
        <h2> Text Level </h2>
        <PageLevel handLeLevel={handLeLevel} />
        <StyledLink href={"/folgePage"} onClick={handleNext}>
          {" "}
          Next
        </StyledLink>
      </ContainerMain>
    </>
  );
}

const StyledLink = styled(Link)`
  box-shadow: 10px 5px 5px gray;
`;
