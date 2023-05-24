import styled from "styled-components";
import Link from "next/link";
import {
  ContainerMain,
  ContainerMainLabel,
  Box,
  InnereBox,
} from "@/components/styles/container.styled";

const SpaceLabel = styled.span`
  margin-left: 8px;
`;

export default function pageLanguage() {
  function handleCheckEnglish(event) {}
  function handleCheckFrench() {}
  function handleCheckDeutsch() {}

  return (
    <ContainerMain>
      <Box>
        <InnereBox>
          <h1>Language</h1>
          <ContainerMainLabel ContainerMainLabel>
            <input onChange={handleCheckEnglish} type="checkbox" /> 🇬🇧{" "}
            <SpaceLabel>
              <h3>English</h3>
            </SpaceLabel>
            <SpaceLabel>
              <i>(Set as default)</i>
            </SpaceLabel>
          </ContainerMainLabel>
          <ContainerMainLabel ContainerMainLabel>
            <input onChange={handleCheckFrench} type="checkbox" /> 🇫🇷{" "}
            <SpaceLabel>
              <h3>France</h3>
            </SpaceLabel>
          </ContainerMainLabel>
          <ContainerMainLabel>
            <input onChange={handleCheckDeutsch} type="checkbox" /> 🇩🇪
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
