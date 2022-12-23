/* eslint-disable react/prop-types */
import * as S from './styles'
import React from 'react';


function Input({Placeholder, Label, Type, onChange, Id, Value}){
    return(
        <S.Div>
            <S.Label>{Label}</S.Label>
            <S.Input placeholder={Placeholder} type={Type} onChange={onChange} value={Value} id={Id}/>
            
        </S.Div>
    )
}

export default Input;