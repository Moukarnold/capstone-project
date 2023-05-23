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
  padding-left: 20px;
`;

const ContainerLanguageLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  flex-direction: raw;
`;

const spaceLabel = { marginLeft: "8px" };

export default function pageLanguage() {
  return (
    <ContainerLanguage>
      <h1> Language</h1>
      <ContainerLanguageLabel>
        <input type="checkbox" /> 🇬🇧{" "}
        <span style={spaceLabel}>
          {" "}
          <h3>English</h3>{" "}
        </span>
        <span style={spaceLabel}>
          <i>(Set as default)</i>
        </span>
      </ContainerLanguageLabel>{" "}
      <ContainerLanguageLabel>
        <input type="checkbox" /> 🇫🇷{" "}
        <span style={spaceLabel}>
          {" "}
          <h3>France</h3>{" "}
        </span>
      </ContainerLanguageLabel>{" "}
      <ContainerLanguageLabel>
        <input type="checkbox" /> 🇩🇪
        <span style={spaceLabel}>
          {" "}
          <h3>Deutsch</h3>{" "}
        </span>
      </ContainerLanguageLabel>{" "}
      <Link href={"/"}>
        {" "}
        <button> Return</button>
      </Link>
    </ContainerLanguage>
  );
}
