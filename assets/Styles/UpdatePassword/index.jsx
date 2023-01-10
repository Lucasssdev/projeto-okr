import styled from "styled-components";
import settingsCss from "../../Util/SettingsCss";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    //gap:100px;
    //max-height: 300px;
    
    section{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: start;
        padding-top: 100px;
        max-height: 1000px;
       
    }
    
`  
export const Link = styled.div`
    
    margin: 25px 0px;
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-top: 30px;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    justify-self: end;
    
    a{
        &:hover{
            color: ${settingsCss.colorTextLinkHover};
            font-size: 13px;
        }
        text-decoration: underline;
    } 
`  