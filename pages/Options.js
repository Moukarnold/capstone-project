import styled from "styled-components";
import Link from "next/link";
import {
  ContainerMain,
  ContainerMainLabel,
  Box,
  InnereBox,
  SpaceLabel,
} from "@/components/styles/container.styled";

export default function pageLanguage() {
  function handleCheckEnglish() {}
  function handleCheckFrench() {}
  function handleCheckDeutsch() {}

  return (
    <ContainerMain>
      <Box>
        <InnereBox>
          <h1> Options</h1>
          <ContainerMainLabel>
            <input onClick={handleCheckEnglish} type="checkbox" />
            <span style={spaceLabel}>
              {" "}
              <h3>Simple Sentences & For Kids</h3>
            </span>
          </ContainerMainLabel>
          <ContainerMainLabel>
            <input onClick={handleCheckFrench} type="checkbox" />
            <span style={spaceLabel}>
              {" "}
              <h3>Poemes</h3>{" "}
            </span>
          </ContainerMainLabel>{" "}
          <ContainerMainLabel>
            <input onClick={handleCheckDeutsch} type="checkbox" />
            <span style={spaceLabel}>
              {" "}
              <h3>Jokes</h3>{" "}
            </span>
          </ContainerMainLabel>{" "}
        </InnereBox>
        <Link href={"/"}>
          {" "}
          <button> Return</button>
        </Link>
      </Box>
    </ContainerMain>
  );
}