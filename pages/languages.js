import styled from "styled-components";
import Link from "next/link";

const ContainerLanguage = styled.div`
  height: 500px;
  width: 500px;
  border: solid 2px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ContainerLanguageLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  flex-direction: row;
`;

const Box = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnereBox = styled.div`
  background-color: pink;
  height: 300px;
  width: 300px;
  border: 2px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20%;
  margin-top: 10%;
`;

const SpaceLabel = styled.span`
  margin-left: 8px;
`;

export default function pageLanguage() {
  function handleCheckEnglish() {}
  function handleCheckFrench() {}
  function handleCheckDeutsch() {}

  return (
    <ContainerLanguage>
      <Box>
        <InnereBox>
          <h1>Language</h1>
          <ContainerLanguageLabel>
            <input onChange={handleCheckEnglish} type="checkbox" /> 🇬🇧{" "}
            <SpaceLabel>
              <h3>English</h3>
            </SpaceLabel>
            <SpaceLabel>
              <i>(Set as default)</i>
            </SpaceLabel>
          </ContainerLanguageLabel>
          <ContainerLanguageLabel>
            <input onChange={handleCheckFrench} type="checkbox" /> 🇫🇷{" "}
            <SpaceLabel>
              <h3>France</h3>
            </SpaceLabel>
          </ContainerLanguageLabel>
          <ContainerLanguageLabel>
            <input onChange={handleCheckDeutsch} type="checkbox" /> 🇩🇪
            <SpaceLabel>
              <h3>Deutsch</h3>
            </SpaceLabel>
          </ContainerLanguageLabel>
        </InnereBox>
        <Link href={"/"}>
          <button>Return</button>
        </Link>
      </Box>
    </ContainerLanguage>
  );
}
