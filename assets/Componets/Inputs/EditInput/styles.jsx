import styled from "styled-components";
import settingsCss from "../../../../Util/SettingsCss";
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  gap: 15px;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding: 15px 15px;
  border-radius: 5px;
  padding-left: 5px;
  color: ${settingsCss.colorDetails};
  margin-top: 10px;
  div {
    display: flex;
    gap: 5px;
    svg {
      display: none;
    }
    &:hover {
      svg {
        display: flex;
        color: white;
      }
    }
  }
`;
export const Input = styled.input`
  width: 100%;
  height: auto;
  border: hidden;
  font-weight: 400;
  font-size: 28px;
  background: transparent;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #ff4343;
  }
`;
export const Label = styled.label`
  color: white;
  font-weight: 400;
  font-size: 14px;
  padding-left: 5px;
`;
