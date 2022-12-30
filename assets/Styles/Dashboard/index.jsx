import styled from "styled-components";
import settingsCss from "../../../Util/SettingsCss";

export const Div = styled.div`
display: grid;
grid-template-columns: 50% 50%;
width: 100%;
height: 500vh;
background-color:${settingsCss.colorSecond};


`
export const Colum1 = styled.div`
background-color: #6f6f11;
padding: 30px 30px 0px 30px;


`
export const Colum2 = styled.div`
background-color: #7a1515;


`
export const Activities = styled.div`
background-color:${settingsCss.colorPrimary};
height: 100%;
border-top-left-radius: 40px;
  border-top-right-radius: 40px;padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  span{
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
    background-color: black;
  }

`
export const Description = styled.div`
background-color: #000000;


`