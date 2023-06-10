// pages/index.js
import { useState } from "react";
import Languages from "@/components/languages/Languages";
import Themes from "@/components/themes/Themes";
import Difficulty from "@/components/difficulty/Difficulty";
import { ContainerMain } from "@/components/styledComponents/Container.styled";
import { useRouter } from "next/router";

export default function HomePage() {
  const [config, setConfig] = useState({
    language: "",
    theme: "",
    difficulty: "",
  });
  const router = useRouter();

  function handleNewLanguage(language) {
    setConfig((prevState) => ({ ...prevState, language }));
  }

  function handleNewTheme(theme) {
    setConfig((prevState) => ({ ...prevState, theme }));
  }

  function handleNewDifficulty(difficulty) {
    setConfig((prevState) => ({ ...prevState, difficulty }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    router.push({
      pathname: "/screening",
      query: config,
    });
  }

  return (
    <ContainerMain>
      <h2>Virelangue</h2>
      <Languages onLanguage={handleNewLanguage} />
      <Themes onTheme={handleNewTheme} />
      <Difficulty onDifficulty={handleNewDifficulty} />
      <form onSubmit={handleSubmit}>
        <button type="submit">Obtenir une réponse</button>
      </form>
    </ContainerMain>
  );
}
