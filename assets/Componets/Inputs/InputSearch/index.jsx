import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';



// eslint-disable-next-line react/prop-types
function Input({Placeholder, Icon}){
    return(
        <S.Div>
            <S.Input placeholder={Placeholder}/>
            <S.Icon> 
                <FontAwesomeIcon icon={Icon} size="lg"/>
            </S.Icon>
        </S.Div>
    )
}

export default Input;