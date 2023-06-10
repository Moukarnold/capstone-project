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

export const ScreenBox = styled.div`
  //background-color: pink;
  height: 200px;
  width: 450px;
  border: 2px solid;
  border-radius: 10px;
  //display: flex;
  // flex-direction: column;
  //  justify-content: space-around;
  align-items: center;
  margin-bottom: 10;
  margin-top: -150px;
  box-shadow: 10px 5px 5px gray;
  text-align: center;
`;
export const SpaceLabel = styled.span`
  margin-left: 8px;
`;
/*const StyledLink = styled(Link)`
  box-shadow: 10px 5px 5px gray;
`;  */

export const ButtonContainer = styled.button`
  background: none;
  border: none;
  padding: 0;
  //cursor: pointer;
`;
