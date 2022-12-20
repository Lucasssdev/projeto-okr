import styled from "styled-components";
import settingsCss from "../../../Util/SettingsCss";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap:100px;
    max-height: 300px;
  
    section{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        max-height: 700px;
    }
    
`  
export const Link = styled.div`
    
    margin: 25px 0px;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    text-align: center;
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
export const NewField = styled.div`
     * {
        transition-duration: .5s;
    }
    width: 100%;
    justify-content: center;
    display: flex;
    padding: 20px 0px 90px 0px;
    button{
        background-color: transparent;
        border: hidden;
        border-radius: 100%;
        
    }
    svg{
        color:${settingsCss.colorButton};
        box-shadow: 0px 0px 25px rgba(117, 89, 242, 0.5);    
        border-radius: 100%;
        &:hover{
            transform: rotate(360deg);
            color: ${settingsCss.colorButtonHover};
            box-shadow: 0px 0px 30px rgba(117, 89, 242, 0.5);
        }
    }
`
export const DivInput = styled.div`
display: flex;
flex-direction: column;
gap: 10px;

`