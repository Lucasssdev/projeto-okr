/* eslint-disable */
import styled from "styled-components";
import settingsCss from "../../../Util/SettingsCss";

export const Div = styled.button`
  display: flex;
  align-items: center;
  gap: 25px;
  width: 220px;
  height: auto;
  padding-left: 0px;
  color: ${(props) =>
    props.select ? settingsCss.colorDetails : settingsCss.coloTextMain};
  padding: 10px 20px;
  background: transparent;
  border: hidden;
  text-align: start;

  div {
    display: ${(props) => (props.select ? "flex" : "none")};
  }
  &:hover {
    cursor: pointer;
    div {
      display: flex;
    }
  }
  img {
    background-color: #a593f3;
    border-radius: 50%;
    object-fit: cover;
  }
`;
export const Text = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  // line-height: 20px;
`;
export const Icon = styled.i``;
export const Border = styled.div`
  margin-left: -25px;
  background-color: ${settingsCss.colorDetails};
  height: 40px;
  width: 10px;
  border-radius: 8px;
`;
