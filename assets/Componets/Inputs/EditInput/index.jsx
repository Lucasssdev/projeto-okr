/* eslint-disable react/prop-types */
import * as S from './styles'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/pro-thin-svg-icons';


function Input({Placeholder, Label, Type, onChange, onBlur,  Id, Value}){
    return(
        <S.Div>
            <S.Label>{Label}</S.Label>
            <div>
            <S.Input onBlur={onBlur} placeholder={Placeholder} type={Type} onChange={onChange} value={Value} id={Id}/>
            <FontAwesomeIcon icon={faPencil} size="xl" />

            </div>
        </S.Div>
    )
}

export default Input;