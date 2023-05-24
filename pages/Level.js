import styled from "styled-components";
import Link from "next/link";
import {
  ContainerMain,
  ContainerMainLabel,
  Box,
  InnereBox,
} from "@/components/styles/container.styled";

const spaceLabel = { marginLeft: "8px" };

export default function pageLanguage() {
  function handleCheckEnglish() {}
  function handleCheckFrench() {}
  function handleCheckDeutsch() {}

  return (
    <ContainerMain>
      <Box>
        <InnereBox>
          <h1> Level</h1>
          <ContainerMainLabel>
            <input onChange={handleCheckEnglish} type="checkbox" />
            <span style={spaceLabel}>
              {" "}
              <h3>Basic</h3>
            </span>
          </ContainerMainLabel>
          <ContainerMainLabel>
            <input onChange={handleCheckFrench} type="checkbox" />
            <span style={spaceLabel}>
              {" "}
              <h3>Intermediaire</h3>{" "}
            </span>
          </ContainerMainLabel>{" "}
          <ContainerMainLabel>
            <input onChange={handleCheckDeutsch} type="checkbox" />
            <span style={spaceLabel}>
              {" "}
              <h3>Advanced</h3>{" "}
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
