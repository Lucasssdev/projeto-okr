/* eslint-disable react/prop-types */
import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


 
function ButtonMain({Text, Icon}){
    return(
        <S.Div>
            <S.Border> 
                {/* Borda lateral para hover/select */} 
            </S.Border>
            <S.Icon> 
                <FontAwesomeIcon icon={Icon} size="lg"/>
            </S.Icon>
            <S.Text>{Text}</S.Text>
        </S.Div>
    )
}

export default ButtonMain;