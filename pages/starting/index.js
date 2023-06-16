import Difficulty from "@/components/difficulty/Difficulty";
import Languages from "@/components/languages/Languages";
import {
  Button,
  ContainerForm,
  ContainerMain,
} from "@/components/styledComponents/Container.styled";
import Themes from "@/components/themes/Themes";
import { ConfigContext } from "@/contexts/ConfigContext";
import { useRouter } from "next/router";
import { useContext } from "react";

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
        <Button type="submit">Get Answer</Button>
      </ContainerForm>
      <Button onClick={handleReturn}> Home page</Button>
    </ContainerMain>
  );
}
