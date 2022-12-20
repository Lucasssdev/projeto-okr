/* eslint-disable */

import styled from "styled-components";
import settingsCss from "../../../../Util/SettingsCss";

export const Div = styled.button`
    :last-child{
    transition-duration: 1s;
    }
    
    display: flex;
    align-items: center;
    background-color:${settingsCss.colorButton} ;
    border: hidden;
    width: 100%;
    height: 45px;
    box-shadow: 0px 0px 25px rgba(117, 89, 242, 0.25);
    border-radius: 4px; 
    margin-top: 20px;
    *{
            transition-duration: 0.7s;
        }
   
    &:hover{
        background-color: ${settingsCss.colorButtonHover};
        //etter-spacing: 0.5px;
        h2{
        padding-right: 0px;
    }
        svg{
            transform: translateX(2em)  !important;
        }
    } 
      
    
`
export const Text = styled.h2`
    width: 100%;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    padding-right: 20px;
    
`
export const Icon = styled.div`
    padding-right: 60px;
`