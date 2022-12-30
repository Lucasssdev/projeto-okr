/* eslint-disable react/prop-types */
import * as S from './styles'
import React from 'react';


 
function Description({text }){
    return(
        <S.Div >

            <span>oi {text}</span>
        </S.Div>
    )
}

export default Description;