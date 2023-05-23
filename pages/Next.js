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
        <InnereBox></InnereBox>
        <Link href={"/"}>
          <button>Return</button>
        </Link>
      </Box>
    </ContainerLanguage>
  );
}
