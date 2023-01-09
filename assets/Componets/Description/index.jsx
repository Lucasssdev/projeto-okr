/* eslint-disable react/prop-types */
import * as S from "./styles";
import React from "react";

function Description({ text }) {
  return (
    <S.Div>
      <S.Text>{text}</S.Text>
    </S.Div>
  );
}

export default Description;
