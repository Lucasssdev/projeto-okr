import styled from "styled-components";
import settingsCss from "../../../../Util/SettingsCss";

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
    display: flex;
    width: 340px;
    height: 45px;
    background: ${settingsCss.colorThird};
    border-radius: 4px;
   
    
`
export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: hidden;
    background: transparent;
    :focus{
        outline: none 
    }
`
export const Icon = styled.div`
    opacity: 60%;
    &:hover{
        opacity :100% ;
    }
`