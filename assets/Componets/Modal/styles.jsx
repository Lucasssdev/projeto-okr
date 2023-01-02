import styled from "styled-components";
import settingsCss from "../../../Util/SettingsCss";


export const Container = styled.div`
display: flex;
color:  #7C1ED9;
section{
    height: auto;
    padding: 0px;
    width: auto;
    background-color: #fff;
}
`
export const Fomr = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    background: rgba(255,255,255);
    height: 94%;
    width: 96%;
    border-radius: 16px;
    gap: 20px;
    

    label{
        font-weight: 800;
        font-size: 24px;
        color: #7C1ED9;
        display: flex;
        justify-self: flex-start;
        margin-top: -20px ;
        margin-bottom: 15px;
        
        
        
    }
    
    section{
        display: flex;
        gap: 100px;
        margin-bottom: 0px;
        width: auto !important;
        background-color: transparent;
    }
    button{
        padding: 8px;
        font-size: 16px;
        border-radius: 8px;
        border: none;
        background-color: #7C1ED9;
        color: #fff;
        &:hover {
            background-color:  #7D49E6;
            cursor: pointer;
        };
        
    }
    svg{
        color: #7C1ED9;
    }


`
export const Button = styled.button`
    width: auto;
    height: auto;
    color: white;
    padding: 8px;
    border-radius: 8px;
    border: none;
    font-size: 12px;
    background-color:#663092;
    &:hover {
            background-color:  #7337A3;
            cursor: pointer;
        };

    
`
export const DivModal = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const CancelZone = styled.div`
    background: rgba(0,0,0,.5);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 98;
`;

export const DivModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 400px;
    left: 35vw;
    top: 35vh;
    justify-content: center;
    align-items: center;
    padding: 0px;
    border-radius: 16px;
    background-color: aquamarine;
   
    background: rgba(255,255,255,.9);
    box-shadow: 0 0 35px rgba(0,0,0,.2);
    z-index: 99 !important;
`;
export const ButtonExt = styled.button`
    * {
    transition-duration: 1s;
  }

  background: ${settingsCss.green};
  box-shadow: 0px 0px 15px rgba(89, 242, 205, 0.55);
  border-radius: 4px;
  width: 229px;
  height: 45px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: ${settingsCss.colorTextBlack};

  &:hover {
    svg {
      transform: rotate(360deg);
    }
    background-color: ${settingsCss.greenHover};
    box-shadow: 0px 0px 20px rgba(89, 242, 205, 0.55);
  }
   
`
export const DivExtern = styled.div`
    display: flex;
    gap: 100px;
    margin-bottom: 0px;
    width: auto ;
    background-color: transparent;
`;

export const ButtonX = styled.button`
    display: flex;
    align-self: flex-end;
    background-color:  #7C1ED9 !important;
    color: white !important;
    border-bottom-right-radius: 0px !important;
    border-top-left-radius: 0px !important;
    padding: 5px !important;
    &:hover {
            background-color:  #7D49E6 !important;
            cursor: pointer !important;
        };
        
    
`;
