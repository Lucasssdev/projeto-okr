import styled from "styled-components";
import settingsCss from "../../../Util/SettingsCss";

export const Div = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 500vh;
  background-color: ${settingsCss.colorSecond};
  h3 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
  }
`;
export const Colum1 = styled.div`
  //background-color: #6f6f11;
  padding: 30px 15px 0px 15px;
`;
export const Colum2 = styled.div`
  //background-color: #7a1515;
  padding: 30px 15px 0px 15px;
  display: grid;
  grid-template-rows: 130px 130px auto auto;
  gap: 20px;
`;
export const Activities = styled.div`
  background-color: ${settingsCss.colorPrimary};
  height: 100%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Scores = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
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
  height: 100%;
  border-radius: 10px;
  color: ${settingsCss.colorDetails};
  font-weight: 700;
  font-size: 46px;

  span {
    color: white;
    font-weight: 200;
    font-size: 14px;
    text-transform: uppercase;
    word-spacing: 4px;
  }
  small {
    color: white;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    strong{
      color: ${prop => prop.color ?? '#25F9A0'}
    }
  }
`;
export const Okrs = styled.div`
  background-color: ${settingsCss.colorPrimary};
  border-radius: 40px;
  height: auto;
  padding: 20px;
  min-height: 200px;
`;
export const ListOkrs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const History = styled.div`
  background-color: ${settingsCss.colorPrimary};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  height: auto;
  padding: 20px;
  min-height: 200px;
`;
