import MainLayout from "../../assets/Layout/MainLayout";
import * as S from "../../assets/Styles/Dashboard";
import React, { useState } from "react";
import Description from "../../assets/Componets/Description";

export default function DashBoard() {
  /*const [keys, setKeys] = useState([])
  const [okrs, setOkrs] = useState([
    {
      name: "Ler mais livros",
      keys: [
        "ler 2 pagisnas por dia",
        "aumenta 2x paginas por semana",
        "ler 2 pagisnas por dia",
        "aumenta 2x paginas por semana",
        "ler 2 pagisnas por dia",
        "aumenta 2x paginas por semana",
        "ler 2 pagisnas por dia",
        "aumenta 2x paginas por semana",
        "ler 2 pagisnas por dia",
        "aumenta 2x paginas por semana",
        "ler 2 pagisnas por dia",
        "aumenta 2x paginas por semana",
      ],
    },
    {
      name: "aumentar faturaemnto",
      keys: [
        "ler 4 pagisnas por dia",
        "aumenta 4x paginas por semana",
        "ler 4 pagisnas por dia",
        "aumenta 4x paginas por semana",
       
      ],
    },
    {
      name: "Subir nivel",
      keys: [
        "ler 8 pagisnas por dia",
        "aumenta 8x paginas por semana",
        "ler 8 pagisnas por dia",
        "aumenta 8x paginas por semana",
        "ler 8 pagisnas por dia",
        "aumenta 8x paginas por semana",
        "ler 8 pagisnas por dia",
        
      ],
    }
  ]); 
  for(var i = 0 ; i < okrs.length ; i++){
    
    okrs[i].keys.map((key) => {
      console.log(key)
      let arr = [...keys]
      arr.push(key)
      setKeys(arr)})
  }*/

  return (
    <S.Div>
      <S.Colum1>
        <S.Activities>
          <span>
            minhas <strong>atividades</strong>
          </span>
          {
           
  //console.log(keys)

          }
        <Description text={'olaaa'}/>
        </S.Activities>
      </S.Colum1>
      <S.Colum2>ppo</S.Colum2>
    </S.Div>
  );
}
DashBoard.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
