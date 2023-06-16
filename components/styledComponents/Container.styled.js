import styled from "styled-components";

export const ContainerMain = styled.div`
  position: relative;
  height: 560px;
  width: 500px;
  border: solid 2px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding: 2%;
  justify-content: space-around;
  align-items: center;
  background-color: #d2ecf4;
  border-radius: 20px;
`;

export const ContainerForm = styled.form`
  height: 400px;
  width: 350px;
  border: solid 2px #d4e6eb;
  margin: auto;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 2%;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  background-color: #facb5d;
  text-align: center;
`;
export const ContainerMainLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  flex-direction: row;
`;

export const Navbar = styled.div`
  height: 40px;
  width: 440px;
  border-radius: 10px;
  border: solid 2px;
  display: flex;
  justify-content: center;
  background-color: #f8ecd0;
`;

export const Navbar1 = styled.div`
  height: 40px;
  width: 440px;
  border-radius: 10px;
  border: solid 2px;
  background-color: #f8ecd0;
  padding: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px gray solid;
  background-color: #ebe9e9;
  height: 130px;
  width: 440px;
  padding: 4%;
  border-radius: 10px;
  margin-top: 15px;
`;
export const ScreenBox1 = styled.div`
  height: 200px;
  width: 450px;
  border: 1px solid;
  border-radius: 20px;
  box-shadow: 10px 5px 5px gray;
  padding-left: 4px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  background-color: #facb5d;
`;

export const Microphone = styled.div`
  margin-bottom: -50px;
`;

export const Space = styled.div`
  height: 4px;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px gray solid;
  background-color: #ebe9e9;
  height: 130px;
  width: 440px;
  padding: 4%;
  border-radius: 10px;
`;

export const ScreenBox = styled.div`
  height: 200px;
  width: 450px;
  border: 2px solid;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 10px 5px 5px gray;
  z-index: 0;
  padding: 2%;
  background-color: #facb5d;
`;

export const SpaceLabel = styled.span`
  margin-left: 8px;
`;

export const Button = styled.button`
  font-size: 15px black;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: black;
  background-color: #b79d5f;
  border: none;
  border-radius: 10px;
`;
