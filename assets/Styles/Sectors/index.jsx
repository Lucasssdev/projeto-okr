//import settingsCss from "../../Util/SettingsCss";
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
    display:  flex;
    gap: 5px;
`
export const Sectors = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(33.3%, 1fr));
    place-items: center;
    margin: auto;
    width:100% ;
    @media (max-width: 1300px){
        grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
 
    }
    @media (max-width: 1180px){
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
        width: 80%;
 
    }
    
`