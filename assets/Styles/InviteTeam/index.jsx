import styled from "styled-components";
import settingsCss from "../../../Util/SettingsCss";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 300px;
  
    section{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    
`  
export const Link = styled.div`
    
    margin: 25px 0px 60px 0px;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    align-items: center;
    
    button{
        text-decoration: underline;
        text-transform: uppercase;
        width: 120px;
        margin-top: 15px;
        background-color: transparent;
        border: hidden;
        &:hover{
            cursor: pointer;
            color:${settingsCss.colorTextLinkHover};
            font-size: 13px;
        }
    } 
`  
