import {
  ContainerMain,
  InnereBox,
} from "@/components/styledComponents/Container.styled";
import styled from "styled-components";
import Link from "next/link";

export default function Nextpage() {
  return (
    <ContainerMain>
      <InnereBox> </InnereBox>
      <StyledLink href={"/"}> return</StyledLink>
    </ContainerMain>
  );
}
const StyledLink = styled(Link)`
  box-shadow: 10px 5px 5px gray;
`;
