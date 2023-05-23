import styled from "styled-components";
import Link from "next/link";

const ContainerOption = styled.div`
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

const ContaineroptionLabel = styled.label`
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
const spaceLabel = { marginLeft: "8px" };

export default function pageLanguage() {
  function handleCheckEnglish() {}
  function handleCheckFrench() {}
  function handleCheckDeutsch() {}

  return (
    <ContainerOption>
      <Box>
        <InnereBox>
          <h1> Level</h1>
          <ContaineroptionLabel>
            <input onChange={handleCheckEnglish} type="checkbox" />
            <span style={spaceLabel}>
              {" "}
              <h3>Basic</h3>
            </span>
          </ContaineroptionLabel>
          <ContaineroptionLabel>
            <input onChange={handleCheckFrench} type="checkbox" />
            <span style={spaceLabel}>
              {" "}
              <h3>Intermediaire</h3>{" "}
            </span>
          </ContaineroptionLabel>{" "}
          <ContaineroptionLabel>
            <input onChange={handleCheckDeutsch} type="checkbox" />
            <span style={spaceLabel}>
              {" "}
              <h3>Advanced</h3>{" "}
            </span>
          </ContaineroptionLabel>{" "}
        </InnereBox>
        <Link href={"/"}>
          {" "}
          <button> Return</button>
        </Link>
      </Box>
    </ContainerOption>
  );
}
