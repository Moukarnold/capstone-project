import { useContext } from "react";
import Languages from "@/components/languages/Languages";
import Themes from "@/components/themes/Themes";
import Difficulty from "@/components/difficulty/Difficulty";
import {
  ContainerMain,
  ContainerForm,
} from "@/components/styledComponents/Container.styled";
import { useRouter } from "next/router";
import { ConfigContext } from "@/contexts/ConfigContext";

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

  return (
    <ContainerMain>
      <h2>Tonguy Twisty</h2>
      <ContainerForm onSubmit={handleSubmit}>
        <Languages onLanguage={handleNewLanguage} />
        <Themes onTheme={handleNewTheme} />
        <Difficulty onDifficulty={handleNewDifficulty} />
        <button type="submit">Get Answer</button>
      </ContainerForm>
    </ContainerMain>
  );
}
