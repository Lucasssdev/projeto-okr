import styled from "styled-components";
import settingsCss from "../../Util/SettingsCss";

export const Container = styled.div`
  display: flex;
`;

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
  background: rgba(0, 0, 0, 0.5);
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
  //height: 500px;
  width: 500px;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 50px;
  border-radius: 10px;
  background-color: ${settingsCss.colorSecond};

  //box-shadow: 0 0 35px rgba(0, 0, 0, 0.2);
  z-index: 99 !important;
  label {
    font-weight: 400;
    font-size: 24px;
    color: #E0E0E0;
    text-transform: uppercase;
    margin-bottom: 50px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 50px 60px 0px 60px;
  gap: 5px;
  svg{
    font-size: 20px;
    display: flex;
    align-self: flex-start;
    
  }
`;
export const ButtonExt = styled.button`
  * {
    transition-duration: 1s;
  }

  background: transparent;
  margin-left: 10px;
  width: auto;
  height: auto;
  border: hidden;
  font-size: 20px;
  color: white;

  &:hover {
    svg {
      transform: rotate(360deg);
    }
  }
`;
export const DivExtern = styled.div`
  display: flex;
  gap: 100px;
  margin-bottom: 0px;
  width: auto;
  background-color: transparent;
`;

export const ButtonX = styled.button`
  display: flex;
  align-self: flex-end;
  position: fixed;
  background-color: transparent;
  color: #E0E0E0;
  width: auto;
  height: auto;
  border: hidden;
  padding: 10px 15px 10px 10px;
  &:hover {
    color: ${settingsCss.coloTextMain};
    cursor: pointer;
  }
`;
export const Area = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
   // height: auto;
    padding: 15px 15px ;
    border-radius: 5px ;
    padding-left: 5px;
    background-color  : ${settingsCss.colorThird} ;
    color: ${settingsCss.colorDetails};
    margin-top: 10px;
    
`
export const TextArea = styled.textarea`
    width: 100%;
    min-height: 70px;
    max-height: 300px;
    border: hidden;
    padding-left: 15px;
    background: transparent;
    :focus{
        outline: none;
    }
    ::placeholder{
        color:${settingsCss.colorDetails};;
    }
`
export const Icon = styled.div`

`