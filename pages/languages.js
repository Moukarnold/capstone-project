import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  ContainerMain,
  ContainerMainLabel,
  InnereBox,
  SpaceLabel,
} from "@/components/styledComponents/Container.styled";

export default function PageLanguage(props) {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    } else {
      setLanguage("english");
      localStorage.setItem("language", "english");
    }
  }, []);

  function handleLanguage(event) {
    const { value } = event.target;
    setLanguage(value);
    localStorage.setItem("language", value);
    const storedLanguage = localStorage.getItem("language");
    console.log("La langue est " + storedLanguage);
  }

  useEffect(() => {
    if (language === "") {
      setLanguage("english");
    }
  }, [language]);

  return (
    <ContainerMain>
      <Box>
        <InnereBox>
          <h1>Language</h1>
          <form>
            <ContainerMainLabel>
              <input
                onChange={handleLanguage}
                type="checkbox"
                value="english"
                name={props.value}
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
                onChange={handleLanguage}
                type="checkbox"
                checked={language === "french"}
                name={props.value}
                value="french"
              />{" "}
              🇫🇷{" "}
              <SpaceLabel>
                <h3>France</h3>
              </SpaceLabel>
            </ContainerMainLabel>
            <ContainerMainLabel>
              <input
                onChange={handleLanguage}
                type="checkbox"
                checked={language === "deutsch"}
                name={props.value}
                value="deutsch"
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
