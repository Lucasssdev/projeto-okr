import styled from "styled-components";
import settingsCss from "../../../Util/SettingsCss";

export const Container = styled.div``
export const NewField = styled.div`
     * {
        transition-duration: .5s;
    }
    width: 100%;
    justify-content: center;
    display: flex;
    padding: 10px 0px 30px 0px;
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