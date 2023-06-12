import styled from "styled-components";

export const ContainerMain = styled.div`
  position: relative;
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
  position: absolute;
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  border: 2px gray solid;
  background-color: #ebe9e9;
  height: 130px;
  width: 440px;
  margin-top: 10px;
  padding: 20px;
  z-index: -1;
  border-radius: 10px;
`;

export const ScreenBox = styled.div`
  //background-color: pink;
  position: absolute;
  //margin: 10px;
  height: 200px;
  width: 450px;
  border: 2px solid;
  border-radius: 10px;
  //display: flex;
  // flex-direction: column;
  //  justify-content: space-around;
  align-items: center;
  margin-bottom: px;
  margin-top: -250px;
  box-shadow: 10px 5px 5px gray;
  text-align: center;
  z-index: -1;
  padding: 2px;
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
