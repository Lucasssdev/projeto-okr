/* eslint-disable react/prop-types */
import React from "react";
import * as S from "./styles";
//import { useState, useEffect } from "react";
import UserItem from "../UserItem";

import TeamUniqueUser from "../TeamUniqueUser";

const SectorInfos = ({ sector, allUsers, getTeam, getSector }) => {
  console.log(" SectorInfos:", sector);

  return (
    <S.Container sector={sector}>
      <S.Header>
        <S.Name>{sector.name}</S.Name>
        <TeamUniqueUser
          sector={sector}
          userOnSector={sector?.users}
          allUsers={allUsers}
          getTeam={getTeam}
          getSector={getSector}
          widthImg={"40"}
          heightImg={"40"}
        />
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
      <S.Content>
        <S.Score>
          <S.Box>
            <S.Opens>
              888
              <span>
                <strong>tasks</strong> realizadas
              </span>
              <small>
                2022 • q3 • <strong>+10</strong>
              </small>
            </S.Opens>
            <S.Media>
              9.9
              <span>
                <strong>nota</strong> media
              </span>
              <small>
                2022 • q3 • <strong>+10</strong>
              </small>
            </S.Media>
          </S.Box>
        </S.Score>
        <S.ListTeam>
          {sector?.users
            .sort(function (a, b) {
              const permissionA = a.permission;
              const permissionB = b.permission;
              return permissionA - permissionB;
            })
            .map((user, key) => <UserItem user={user} key={key} sector={sector}/>) ?? null}
        </S.ListTeam>
      </S.Content>
    </S.Container>
  );
};
export default SectorInfos;
