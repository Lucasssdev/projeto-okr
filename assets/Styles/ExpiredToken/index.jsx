import settingsCss from "../../../Util/SettingsCss";
import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${settingsCss.colorThird};
    display: flex;
    flex-direction: column;
    justify-content: center ;
    align-items: center;
    margin: 0px;
    overflow: hidden;
    h1{
        font-size: 36px;
        border-bottom: 2px solid ${settingsCss.colorDetails} ;
    }
    p{
        font-size: 20px;
    }
`
    


