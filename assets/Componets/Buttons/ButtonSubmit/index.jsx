/* eslint-disable react/prop-types */
import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';



function ButtonSubmit({Text, Icon, onClick}){
    return(
        <S.Div type='submit' onClick={onClick}>
            <S.Text>{Text}</S.Text>
            <S.Icon> 
                <FontAwesomeIcon icon={Icon} size="2x"/>
            </S.Icon>
        </S.Div>
    )
}

export default ButtonSubmit;