import settingsCss from "../../Util/SettingsCss";
import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 170px auto;
`
export const Header = styled.div`
   
    display: flex;
    justify-content: flex-start;
    padding-left: 80px;
    align-items: center;
    
`
export const Title = styled.span`
    text-transform: uppercase;
    font-size: 32px;



`
export const Sectors = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-around;
    
`