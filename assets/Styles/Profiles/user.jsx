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
  transition: 0.7s;
  background-color: transparent;
  width: 30%;
  border: hidden;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
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
  a {
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
export const Data = styled.div`
  input {
    width: auto;
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
    color: white;
    font-weight: 400;
    font-size: 14px;
    padding-left: 5px;
    text {
      font-weight: 400;
      font-size: 28px;
    }
  }
`;
export const DivPass = styled.div`
  padding: 20px 40px 0px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    background-color: ${settingsCss.colorThird};
    font-size: 16px;
    width: 40vw;
    padding: 20px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    ::placeholder{
      color: #999999;

    }
  }
  button{
    width:  500px;
  }
`;
