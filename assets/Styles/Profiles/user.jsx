import styled from "styled-components";
import settingsCss from "../../../Util/SettingsCss";

export const Container = styled.div`
  width: 90%;
  height: 100vh;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: ${settingsCss.colorPrimary};
  display: grid;
  grid-template-rows: 80px auto;
`;
export const Tab = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  border-bottom: 2px solid ${settingsCss.colorSecond};
  margin-right: 255px;
  div {
    display: flex;
    justify-content: center;
    border-right: 2px solid ${settingsCss.colorSecond} !important;
  }
`;
export const TabButton = styled.button`
  background-color: transparent;
  width: 30%;
  border: hidden;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    color: ${settingsCss.colorDetails};
    cursor: pointer;
  }
`;
export const Profile = styled.div`
  display: grid;
  grid-template-columns: 30% auto;
`;
export const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
  display: flex;
  padding-top: 60px;
  a{
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
    &:hover {
    color: ${settingsCss.colorDetails};
    cursor: pointer;
  }
  }
`;
export const Image = styled.div`
  background-color: ${settingsCss.colorDetails};
  width: 205.96px;
  height: 205.96px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
`;
export const Data = styled.div``;
