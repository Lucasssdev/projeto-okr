/* eslint-disable react/prop-types */
import React from "react";
import * as S from "./styles";
import TeamUniqueUser from "../TeamUniqueUser";

const SectorCard = ({
  item,
  setModalSector,
  setSectorSelected,
  sectorInfo,
  index,
  getTeam,
  allUsers,
  getSector,
}) => {
  const handleOnSector = () => {
    setSectorSelected({ ...item, index });
    setModalSector(true);
  };
  return (
    <S.Card>
      {!sectorInfo ? (
        <>
          <S.Title>
            <span onClick={handleOnSector}>{item.name}</span>
            <small>
              ativo{" "}
              <strong>
                desde <br />
                {item.createdIn.split("T")[0].split("-").reverse().join("/")}
              </strong>
            </small>
          </S.Title>
          <S.Infos>
            <TeamUniqueUser
              sector={item}
              userOnSector={item?.users}
              allUsers={allUsers}
              getTeam={getTeam}
              getSector={getSector}
              widthImg={"35"}
              heightImg={"35"}
            />

            <small onClick={handleOnSector}>Ver mais...</small>
          </S.Infos>
        </>
      ) : (
        sectorInfo
      )}
    </S.Card>
  );
};
export default SectorCard;
