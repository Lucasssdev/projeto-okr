/* eslint-disable react/prop-types */
import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


function Input({Placeholder, Icon, Type, onChange, Id, Value}){
    return(
        <S.Div>
            <S.Input placeholder={Placeholder} type={Type} onChange={onChange} value={Value} id={Id}/>
            <S.Icon> 
                <FontAwesomeIcon icon={Icon} size="lg"/>
            </S.Icon>
        </S.Div>
    )
}

export default Input;