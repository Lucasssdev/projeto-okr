import settingsCss from "../../Util/SettingsCss";
import styled from "styled-components";

export const Card = styled.div`
    height: 20vh;
    width: 25vw;
    background-color: ${settingsCss.colorPrimary};
    border-radius: 10px;
    margin-bottom: 20px;
    display:  grid;
    grid-template-rows: 1fr 1fr;
    padding: 25px 10px 10px 25px;
`
export const Title = styled.span`
   font-size: 24px;
   text-transform: uppercase;
   font-weight: 600;
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   small{
    font-weight: 300 ;
    font-size: 10px;
    padding-right: 20px;
   }
`
export const Infos = styled.div`
    font-size: 13px;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    //align-items: flex-end;
    small{
        align-self: flex-end;
        text-transform: none;
    }
   
`
export const Gestor = styled.div`
 
   
`
export const r = styled.div`
   
`