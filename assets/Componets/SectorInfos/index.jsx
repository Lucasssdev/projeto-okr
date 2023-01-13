/* eslint-disable react/prop-types */
import React from "react";
import * as S from "./styles";

import TeamUniqueUser from "../TeamUniqueUser";

const SectorInfos = ({ setModalSector, sector, userOnSector }) => {
  console.log(sector.index);

  const addUser = () => {};

  return (
    <S.Container sector={sector}>
      <S.Header>
        <S.Name>{sector.name}</S.Name>
        <TeamUniqueUser userOnSector={userOnSector} />
        <small>
          ativo{" "}
          <strong>
            desde{" "}
            {sector.createdIn.split("T")[0].split("-").reverse().join("/")}
          </strong>
        </small>
        <S.AllOkrs>
          999 <strong>okrs</strong> <br />
          <span>finalizadas</span>
        </S.AllOkrs>
      </S.Header>
      <S.List></S.List>
    </S.Container>
  );
};
export default SectorInfos;
