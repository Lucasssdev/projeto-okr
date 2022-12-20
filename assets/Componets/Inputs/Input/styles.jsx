import styled from "styled-components";
import settingsCss from "../../../../Util/SettingsCss";
export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 45px ;
    padding: 15px 15px ;
    border-radius: 5px ;
    padding-left: 5px;
    background-color  :  ${settingsCss.colorInput} ;
    color: ${settingsCss.colorDetails};
    margin-top: 10px;
    
`
export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: hidden;
    padding-left: 15px;
    background: transparent;
    :focus{
        outline: none;
    }
    ::placeholder{
        color: #7559F2;
    }
`
export const Icon = styled.div`

`