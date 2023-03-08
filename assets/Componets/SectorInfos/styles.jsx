
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
   // height: 60vh;
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

export const ListTeam = styled.ul`
  //background-color: black;
  padding: 0px ;
  padding-left: 20px;
  
`
export const Score = styled.div`
  //background-color: black;
  padding: 5px 10px;
 border-right: solid 1px ${settingsCss.colorSecond};
   
`
export const Opens = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 3px;
padding-bottom: 10px;

border-bottom:  solid 1px ${settingsCss.colorSecond};
span {
    color: white;
    font-weight: 200;
    font-size: 14px;
    text-transform: uppercase;
    word-spacing: 4px;
  }
  small {
    color: white;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    strong{
      color: ${prop => prop.color ?? '#25F9A0'}
    }
  }
   
`
export const Media = styled.div`
display: flex;
flex-direction: column;
place-content: center;
align-items: center;
gap: 3px;
padding-bottom: 10px;
 span {
    color: white;
    font-weight: 200;
    font-size: 14px;
    text-transform: uppercase;
    word-spacing: 4px;
  }
  small {
    color: white;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    strong{
      color: ${prop => prop.color ?? '#25F9A0'}
    }
  }
   
`
export const Box = styled.div`
  display: grid;
  grid-template-rows : 1fr 1fr ;
  
  padding: 10px 15px ;
  background-color: ${settingsCss.colorThird};
  width: 100%;
  
  border-radius: 10px;
  color: ${settingsCss.colorDetails};
  font-weight: 700;
  font-size: 46px;
  span {
    color: white;
    display: flex;
    gap: 2px;
    font-weight: 200;
    font-size: 14px;
    text-transform: uppercase;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
   
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