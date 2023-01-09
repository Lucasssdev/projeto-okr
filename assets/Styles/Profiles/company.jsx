import styled from "styled-components";
import settingsCss from "../../../Util/SettingsCss";

export const Container = styled.div`
  width: 95%;
  height: 800vh;
  margin-top: 30px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: ${settingsCss.colorPrimary};
  display: grid;
  grid-template-rows: 60px auto;
  padding: 15px 15px 0px 15px;
`;
export const Tab = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  border-bottom: 2px solid ${settingsCss.colorSecond};
  margin-right: 255px;
  div {
    display: flex;
    justify-content: center;
    border-right: 2px solid ${settingsCss.colorSecond} !important;
    :last-child {
      border-right: none !important;
    }
  }
`;
export const TabButton = styled.button`
  transition: 0.7s;
  background-color: transparent;
  width: 100%;
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
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  padding-bottom: 70px;
  input {
    line-height: 0px;
  }
`;

export const Data = styled.div`
  input {
    width: 900px;
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
    width: auto;
    text {
      font-weight: 400;
      font-size: 28px;
    }
  }
`;
export const MyTeam = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  span {
    padding: 0px 25px;
  }

  section {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 70% auto;
  }
`;
export const ListTeam = styled.ul`
  padding: 0px;
`;
export const Invite = styled.div`
  border-left: solid 2px ${settingsCss.colorSecond};
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  span {
    text-align: center;
  }
`;
