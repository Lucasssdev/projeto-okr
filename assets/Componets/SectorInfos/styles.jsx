
import settingsCss from "../../Util/SettingsCss";
import styled, {keyframes} from "styled-components";

export const expandedContainer = keyframes`
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
`;

export const Container = styled.div`
    height: 60vh;
    width: 98.25%;
    background-color: ${settingsCss.colorPrimary};
    border-radius: 10px;
    display:  grid;
    grid-template-rows: 140px auto;
    transform-origin: ${props => (props.sector?.index  % 3) == 0 ? '15%' : ((props.sector?.index  % 3) == 1 ? '50%' : '80%')} 25%;
    //animation: ${expandedContainer} .6s forwards;

   // transition-duration: 0.3s;
`
export const Header = styled.div`
    padding: 20px;
    text-transform: uppercase;
    display: grid;
    grid-template-columns: 1fr 2fr auto 0.5fr;
    align-items: center;
    small{
    font-weight: 300 ;
    font-size: 12px;
    padding-right: 20px;
   }
`

export const List = styled.div`
  background-color: black;
   
`
export const Name = styled.span`
     font-size: 20px;
   text-transform: uppercase;
   font-weight: 600;
   
`
export const AllOkrs = styled.span`
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    line-height: 20px;
    strong{
       color: ${settingsCss.colorDetails}
    }
    span{
        font-size: 14px;
    }
   
`