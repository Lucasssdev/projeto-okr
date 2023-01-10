/* eslint-disable react/prop-types */
import React from "react";
import * as S from './styles'

const SectorCard = ({item}) => {
    console.log(item)
    return(
        <S.Card>
            <S.Title>
                <span>{item.name}</span>
                <small>ativo <strong>desde <br/>{item.createdIn.split('T')[0].split('-').reverse().join('/')}</strong></small>
            
            </S.Title>
            <S.Infos>
                <S.Gestor>gestor:foto nome</S.Gestor>
                
                <small>Ver mais...</small>
            </S.Infos>
        </S.Card>
    ) 
}
export default SectorCard