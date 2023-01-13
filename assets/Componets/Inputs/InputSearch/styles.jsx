import styled from "styled-components";
import settingsCss from "../../../Util/SettingsCss";

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
    display: flex;
    width: ${props => props.underline ? 'auto' : '340px'};
    height: ${props => props.underline ? 'auto' : '45px'};
    background: ${settingsCss.colorThird};
    border-radius: 4px;
    border-bottom: ${props => props.underline ? 'solid 1px #fff' : null} !important;
   
    
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