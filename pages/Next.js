import {
  ContainerMain,
  InnereBox,
} from "@/components/styledComponents/Container.styled";
import styled from "styled-components";
import Link from "next/link";
import { useEffect } from "react";
import HomePage from ".";

export default function Nextpage() {
  return (
    <ContainerMain>
      <InnereBox> </InnereBox>
      <button> refresh </button>
      <StyledLink href={"/"}> return</StyledLink>
    </ContainerMain>
  );
}
const StyledLink = styled(Link)`
  box-shadow: 10px 5px 5px gray;
`;
