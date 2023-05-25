import {
  Box,
  ContainerMain,
  ContainerMainLabel,
  InnereBox,
  SpaceLabel,
} from "@/components/styles/container.styled";
import Link from "next/link";
import { useState } from "react";

export default function PageLanguage() {
  const [language, setLanguage] = useState("english");

  // form element um inpurfleder herum
  // Values auslesen -> Informationen an andere Pages weiterleiten, damit die Sprache sich auf basis der auswahl ändert

  return (
    <ContainerMain>
      <Box>
        <InnereBox>
          switch
          <h1>Language</h1>
          <ContainerMainLabel>
            <input
              onClick={() => setLanguage("english")}
              type="checkbox"
              value="english"
              name="english"
              checked={language === "english"}
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
              onClick={() => setLanguage("french")}
              type="checkbox"
              checked={language === "french"}
              name="french"
            />{" "}
            🇫🇷{" "}
            <SpaceLabel>
              <h3>France</h3>
            </SpaceLabel>
          </ContainerMainLabel>
          <ContainerMainLabel>
            <input
              onClick={() => setLanguage("deutsch")}
              type="checkbox"
              checked={language === "deutsch"}
              name="deutsch"
            />{" "}
            🇩🇪
            <SpaceLabel>
              <h3>Deutsch</h3>
            </SpaceLabel>
          </ContainerMainLabel>
        </InnereBox>
        <Link href={"/"}>
          <button>Return</button>
        </Link>
      </Box>
    </ContainerMain>
  );
}
