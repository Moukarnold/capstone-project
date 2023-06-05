import styled from "styled-components";

export const ContainerMain = styled.div`
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

export const ContainerMainLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  flex-direction: row;
`;

export const Box = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnereBox = styled.div`
  //background-color: pink;
  height: 350px;
  width: 400px;
  border: 2px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10%;
  margin-top: 5%;
`;
export const SpaceLabel = styled.span`
  margin-left: 8px;
`;
/*const StyledLink = styled(Link)`
  box-shadow: 10px 5px 5px gray;
`;  */
