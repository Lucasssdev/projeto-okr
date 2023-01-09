import styled from "styled-components";
import settingsCss from "../../../Util/SettingsCss";

export const Li = styled.li`
  display: grid;
  grid-template-columns: 8% 33% auto;
  width: 97%;
  border-bottom: solid ${settingsCss.colorSecond};
  align-items: center;
  padding: 5px 0px 5px 20px;
  gap: 5px;
`;
export const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
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
export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55px;
  padding-left: 15px;
  svg {
    color: ${(props) => props.color};
  }
  span {
  }
`;
export const Image = styled.div`
  background-color: ${settingsCss.colorDetails};
  width: 70px;
  height: 70px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Data = styled.div`
  display: flex;
  align-items: center;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
export const Name = styled.span`
  font-weight: 400;
  font-size: 22px;
  text-transform: capitalize;

  text {
    text-transform: capitalize;
    font-weight: 700;
  }
`;
export const Officie = styled.span`
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
`;
export const Sector = styled.span`
  text-transform: uppercase;
  color: ${settingsCss.colorDetails};
  font-weight: 700;
  font-size: 20px;
`;
export const Score = styled.div`
  display: flex;
  gap: 10px;
  width: auto;
  padding: 0px;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 0px 15px 0px;
  background-color: ${settingsCss.colorThird};
  width: 30%;
  height: 30%;
  border-radius: 10px;
  color: ${settingsCss.colorDetails};
  font-weight: 700;
  font-size: 46px;
  span {
    color: white;
    display: flex;
    gap: 2px;
    font-weight: 200;
    font-size: 14px;
    text-transform: uppercase;
  }
`;
