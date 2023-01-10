import styled from "styled-components";
import settingsCss from "../../Util/SettingsCss";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    
    
    section{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: center;
        padding-top: 100px;
        max-height: 1000px;
       
    }
    
`  
export const Link = styled.div`
    
    margin: 25px 0px;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    justify-self: end;
    padding-bottom: 30px;
    //max-height: 200px;
    
    a{
        text-decoration: underline;
        &:hover{
            color: ${settingsCss.colorTextLinkHover};
            font-size: 13px;
        }
    } 
` 
export const Message = styled.div`
    margin-top: 180px;
` 