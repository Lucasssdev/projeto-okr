import styled from "styled-components";
import settingsCss from "../../Util/SettingsCss";

export const Container = styled.div`
    width: 100vw;;
    height: 100vh;
    position: fixed;
    z-index: 98;
    top: 0;
    left: 0;
`;
export const ListToGest = styled.div`
    height: 350px;
    width: 250px;
    background-color:${settingsCss.colorThird};
    z-index: 99 !important;
    position: absolute;
    padding: 10px;
    border-radius: 12px;
    border-top-left-radius: 0px;
    left: calc(${(props) => props?.coordinatesX}px + 35px);
    top: calc(${(props) => props?.coordinatesY}px + 35px);
    display: grid;
    grid-template-rows: 30px auto;
   
`;
export const CancelZone = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: transparent;
    //opacity: 10%;
    z-index: 98 !important;
    position: absolute;
    top: 0;
    left: 0;

`;
export const Div = styled.div`
   // background-color: black;
    width: 100%;
    height: auto;
    
   
    
`;
export const Label = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color: rgba(122,122,122,0.2);
    margin: 10px 0px;
    padding: 2px 15px;
    //opacity: 50%;
    font-size: 12px;
    text-transform: uppercase;
    color: ${settingsCss.colorDetails};

`;
export const User = styled.div`
    //background-color: black;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 2px 15px;
    margin-top: 2px;
    img{
        background-color: ${settingsCss.colorDetails};
    border-radius: 50%;
    object-fit: cover;
    margin-left: -12px;
    &:hover {
      cursor: pointer;
    }
    }
 

`;
export const Name = styled.div`
    //background-color: black;
    font-size: 14px;
    text-transform: none;
`;
export const Users = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    display: grid;
    grid-template-rows: auto auto;
    margin-top: 15px;


`;