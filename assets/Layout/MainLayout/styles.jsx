import styled from "styled-components";
import settingsCss from "../../../Util/SettingsCss";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${settingsCss.colorSecond};
  border-radius: 5px;
  display: grid;
  grid-template-columns: 220px auto;
  overflow-y: hidden;
`;

export const ContainerMain = styled.div`
  display: grid;
  grid-template-rows: auto auto;
 //background-color: aqua;
  height: 100vh;
  article {
    display: flex;
    flex-direction: column;
    align-items: center !important;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${settingsCss.colorPrimary};
  border-right: 1px solid ${settingsCss.colorThird};
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
  height: 100%;
  h1 {
    text-align: center;
    height: auto;
  }
`;
export const Options = styled.div`
  background-color: ${settingsCss.colorPrimary};
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 100px;
  justify-content: space-between;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  button {
    div {
      display: none;
    }
    padding: 40px 20px;
    margin-bottom: 10px;
    background: transparent;
    border: hidden;
    text-align: start;
    &:hover {
      cursor: pointer;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
  }
  a {
    padding-left: 30px !important;
    padding: 20px;
    font-family: "Jost", serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
      font-size: 15px;
    }
  }
`;
export const Header = styled.div`
  width: 100%;
  height: 85px !important;
  display: flex;
  justify-content: space-between;

  align-items: center;
  background: ${settingsCss.colorPrimary};
  padding: 40px 30px;
`;
export const Search = styled.div``;
export const Button = styled.button`
  * {
    transition-duration: 1s;
  }

  background: ${settingsCss.green};
  box-shadow: 0px 0px 15px rgba(89, 242, 205, 0.55);
  border-radius: 4px;
  width: 229px;
  height: 45px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: ${settingsCss.colorTextBlack};

  &:hover {
    svg {
      transform: rotate(360deg);
    }
    background-color: ${settingsCss.greenHover};
    box-shadow: 0px 0px 20px rgba(89, 242, 205, 0.55);
  }
`;
export const Logo = styled.image`
  padding: 8px;

  img {
    border: hidden;
    background: transparent;
  }
`;
export const Footer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;
`;
export const Profile = styled.button`
  font-weight: 400;
  font-size: 14px;
  display: flex;
  padding: 0px 20px !important;
  gap: 20px;
  &:hover {
    cursor: pointer;

    color: ${settingsCss.colorDetails};
  }
`;
