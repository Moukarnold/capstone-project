import styled from "styled-components";
import Link from "next/link";
import {
  ContainerMain,
  ContainerMainLabel,
  Box,
  InnereBox,
  SpaceLabel,
} from "@/components/styles/container.styled";
import { useState } from "react";

export default function PageLanguage() {
  // the language is setted as default direct here
  const [languages, setLanguages] = useState("english");

  //function finalLanguage() {}

  function handleCheckLanguage(e) {
    setLanguages(e);
  }

  console.log(languages);
  return (
    <ContainerMain>
      <Box>
        <InnereBox>
          <h1>Language</h1>
          <ContainerMainLabel>
            <input
              onClick={() => handleCheckLanguage("english")}
              type="checkbox"
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
              onClick={() => handleCheckLanguage("french")}
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
              onClick={() => handleCheckLanguage("deutsch")}
              type="checkbox"
              checked={languages === "deutsch"}
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
