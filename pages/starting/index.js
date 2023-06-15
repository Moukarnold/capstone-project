import { useContext } from "react";
import Languages from "@/components/languages/Languages";
import Themes from "@/components/themes/Themes";
import Difficulty from "@/components/difficulty/Difficulty";
import {
  ContainerMain,
  ContainerForm,
  Boutons,
} from "@/components/styledComponents/Container.styled";
import { useRouter } from "next/router";
import { ConfigContext } from "@/contexts/ConfigContext";
import Image from "next/image";

export default function MakeChoice() {
  const { config, setConfig } = useContext(ConfigContext);
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
    router.push("/screening");
  }
  function handleReturn(event) {
    event.preventDefault();
    router.push("/");
  }
  return (
    <ContainerMain>
      <h2>Tonguy Twisty</h2>
      <ContainerForm onSubmit={handleSubmit}>
        <Languages language={config.language} onLanguage={handleNewLanguage} />
        <Themes onTheme={handleNewTheme} />
        <Difficulty onDifficulty={handleNewDifficulty} />
        <Boutons type="submit">Get Answer</Boutons>
      </ContainerForm>
      <button onClick={handleReturn}> Home page</button>
    </ContainerMain>
  );
}
