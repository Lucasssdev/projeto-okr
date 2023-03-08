import styled from "styled-components";
import settingsCss from "../../Util/SettingsCss";

export const Li = styled.li`
  display: grid;
  grid-template-columns: 75px auto auto;
  width: 97%;
  border-bottom: solid ${settingsCss.colorSecond};
  align-items: center;
  padding: 5px 0px 5px 20px;

  
  @media (max-width: 1290px){
    grid-template-columns: 7% 33% auto;
 
    }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 // width: 55px;
  padding: 0px 20px;

`;
export const Image = styled.div`
  background-color: ${settingsCss.colorDetails};
  display: flex;
  justify-content: center;
  border-radius: 100%;
  padding: 1px;
  img {
    background-color:${settingsCss.colorThird};
    border-radius: 50%;
    object-fit: cover;
   
    &:hover {
      cursor: pointer;
    }
  }
  
`;
export const Data = styled.div`
  display: flex;
  align-items: center;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
export const Name = styled.span`
  font-weight: 400;
  font-size: 20px;
  text-transform: capitalize;

  text {
    text-transform: capitalize;
    font-weight: 700;
  }
`;
export const Officie = styled.span`
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
`;
export const Sector = styled.span`
  text-transform: uppercase;
  color: ${settingsCss.colorDetails};
  font-weight: 700;
  font-size: 16px;
`;
export const Score = styled.div`
  display: flex;
  gap: 10px;
  width: auto;
  padding: 0px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 0px 15px 0px;
  background-color: ${settingsCss.colorThird};
  width: 110px;
  height: 30%;
  border-radius: 10px;
  color: ${settingsCss.colorDetails};
  font-weight: 700;
  font-size: 36px;
  span {
    color: white;
    display: flex;
    gap: 2px;
    font-weight: 200;
    font-size: 12px;
    text-transform: uppercase;
  }
  @media (max-width: 1290px){
       display: none;
 
    }
    @media (max-width: 1020px){
       display: none;
 
    }
`;
