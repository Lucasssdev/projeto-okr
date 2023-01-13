import settingsCss from "../../Util/SettingsCss";
import styled from "styled-components";

export const Users = styled.div`
  display: flex;
  z-index: 1;
  img{
    background-color: ${settingsCss.colorThird};
    border-radius: 50%;
    object-fit: cover;
    margin-left: -12px;
    &:hover {
      cursor: pointer;
    }
  }
  
  

`;
export const ImageColabs = styled.div`
display: flex;
flex-direction: column;
font-size: 13px;
gap: 5px;
   img {
    background-color: #a593f3;
    border-radius: 50%;
    object-fit: cover;
    margin-left: -12px;
    &:hover {
      cursor: pointer;
    }
  }
  span{
    margin-left: -10px;
  }
`;
export const ImageGestor = styled.div`
display: flex;
flex-direction: column;
padding-right:70px ;

font-size: 13px;
gap: 5px;
   img {
    background-color: #a593f3;
    border-radius: 50%;
    object-fit: cover;
    margin-left: -12px;
    &:hover {
      cursor: pointer;
    }
  }
  div{
    padding-left: 15px;
  }
`;


