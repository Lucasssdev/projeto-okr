/* eslint-disable */
import styled from "styled-components";
import settingsCss from "../../../../Util/SettingsCss";

export const Div = styled.button`
    display: flex;
    align-items: center;
    gap: 25px;
    width: 280px;
    height: 45px;
    padding-left: 0px;
    div{
        display: none;
    }
    &:hover{
        div{
            display: flex;
            
        }
    }
 
`
export const Text = styled.h2`
      font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
`
export const Icon = styled.i`

`
export const Border = styled.div`
    margin-left: -25px;
    background-color: ${settingsCss.colorDetails};
    height: 60px;
    width: 10px;
    border-radius: 8px;
 

`