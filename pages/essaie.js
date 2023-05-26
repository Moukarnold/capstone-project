import {
  Box,
  ContainerMain,
  ContainerMainLabel,
  InnereBox,
  SpaceLabel,
} from "@components/styledComponents/Container.styled";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function PageLanguage() {
  const [languages, setLanguage] = useState("english");

  function handleLanguage(Event) {
    const { name, value } = Event.target;
    setLanguage((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    console.log("die sprache ist " + prevValue);
  }

  // form element um inpurfleder herum
  // Values auslesen -> Informationen an andere Pages weiterleiten, damit die Sprache sich auf basis der auswahl ändert

  return (
    <ContainerMain>
      <Box>
        <InnereBox>
          switch
          <h1>Language</h1>
          <form>
            <ContainerMainLabel>
              <input
                onClick={(Event) => handleLanguage("english")}
                type="checkbox"
                value="english"
                name="english"
                checked={languages === "english"}
              />{" "}
              🇬🇧{" "}
              <SpaceLabel>
                <h3>English</h3>
              </SpaceLabel>
              <SpaceLabel>
                <i>(Set as default)</i>
              </SpaceLabel>
            </ContainerMainLabel>
            <ContainerMainLabel>
              <input
                onClick={(Event) => handleLanguage("french")}
                type="checkbox"
                checked={languages === "french"}
                name="french"
              />{" "}
              🇫🇷{" "}
              <SpaceLabel>
                <h3>France</h3>
              </SpaceLabel>
            </ContainerMainLabel>
            <ContainerMainLabel>
              <input
                onClick={(Event) => handleLanguage("deutsch")}
                type="checkbox"
                checked={languages === "deutsch"}
                name="deutsch"
              />{" "}
              🇩🇪
              <SpaceLabel>
                <h3>Deutsch</h3>
              </SpaceLabel>
            </ContainerMainLabel>
          </form>
        </InnereBox>
        <Link href={"/"}>
          <button>Return</button>
        </Link>
      </Box>
    </ContainerMain>
  );
}
