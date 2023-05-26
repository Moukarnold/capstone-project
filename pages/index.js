import {
  ContainerMain,
  InnereBox,
} from "@/components/styledComponents/Container.styled";
import Link from "next/link";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <ContainerMain>
        <InnereBox>
          <h1> Homepage</h1>
          <StyledLink href={"/languages"}>Languages</StyledLink>
          <StyledLink href={"/options"}>Options</StyledLink>
          <StyledLink href={"/level"}> Level</StyledLink>
          <StyledLink href={"/next"}> Next</StyledLink>
        </InnereBox>
      </ContainerMain>
    </>
  );
}

const StyledLink = styled(Link)`
  box-shadow: 10px 5px 5px gray;
`;
