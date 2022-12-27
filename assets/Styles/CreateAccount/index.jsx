import styled from "styled-components";
import settingsCss from "../../../Util/SettingsCss";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 50px;
    max-height: 300px;
    
  
    section{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        
    }
    
`  
export const Link = styled.div`
    
    margin: 25px 0px;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    max-height: 200px;
    
    a{
        text-decoration: underline;
        &:hover{
            color:${settingsCss.colorTextLinkHover};
            font-size: 13px;
        }
    } 
`  