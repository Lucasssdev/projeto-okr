/* eslint-disable react/prop-types */
import React from "react";
import * as S from './styles'

const SectorCard = ({item, setModalSector, setSectorSelected, sectorInfo, index}) => {
    console.log(item)
    const handleOnSector = () => {
        setSectorSelected({...item, index})
        setModalSector(true)
        console.log(index)
    }
    return(
        <S.Card >
            {!sectorInfo ? <><S.Title >
                <span onClick={handleOnSector}>{item.name}</span>
                <small>ativo <strong>desde <br/>{item.createdIn.split('T')[0].split('-').reverse().join('/')}</strong></small>
            
            </S.Title>
            <S.Infos>
                <S.Gestor>gestor:foto nome</S.Gestor>
                
                <small onClick={handleOnSector}>Ver mais...</small>
            </S.Infos></> : sectorInfo}
        </S.Card>
    ) 
}
export default SectorCard