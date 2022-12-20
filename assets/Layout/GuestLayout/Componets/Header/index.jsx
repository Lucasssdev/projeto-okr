import React from "react";
import * as S from './styles'


// eslint-disable-next-line react/prop-types
export default function Header({Title,SubTitle}){
    return(
        <S.Container>
            <h1>{Title}</h1>
            <span>{SubTitle}</span>
        </S.Container>
    )
}