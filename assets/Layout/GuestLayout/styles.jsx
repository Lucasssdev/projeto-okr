import styled from "styled-components";
import settingsCss from "../../../Util/SettingsCss";
 
export const Container = styled.div`
    display: grid;
    grid-template-columns: auto 500px ;
    height: 100vh;
    overflow-x: auto ;
    
`
export const WhiteSpacing = styled.div`
    background-color: ${settingsCss.colorSecond};
    overflow-x: auto ;
`
export const Content = styled.div`
    background: ${settingsCss.colorPrimary};
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly !important;
    align-items: center;
    overflow-x: auto ;
    article{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: flex-start;
  
    }
   
`