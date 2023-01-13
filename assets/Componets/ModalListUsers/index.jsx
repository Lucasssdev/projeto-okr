/* eslint-disable react/prop-types */
import React from "react";
import * as S from "./styles";
import Input from "../Inputs/InputSearch";
import { faMagnifyingGlass } from "@fortawesome/pro-light-svg-icons";
import Image from "next/image";
import firstLetterUppercase from "../../Mask/firstLetterUppercase";

import userProfile from "../../../public/userProfile.svg";

//import { useState, useEffect } from "react";

const ModalListUser = ({
  setShowListUsers,
  coordinatesY,
  coordinatesX,
  userOnSector,
}) => {
  const closeList = () => {
    setShowListUsers(false);
  };

  return (
    <S.Container>
      <S.CancelZone onClick={closeList}></S.CancelZone>
      <S.ListToGest coordinatesY={coordinatesY} coordinatesX={coordinatesX}>
        <Input
          underline={true}
          Placeholder={"Pesquisar pessoa"}
          Icon={faMagnifyingGlass}
        />
        <S.Users>
          <S.Div>
            <S.Label>gestores</S.Label>
            {userOnSector.map((user, key) => {
              if (user.permission == "1") {
                return (
                  <S.User key={key}>
                    <Image
                      src={user?.imageProfile ?? userProfile}
                      title={user.name}
                      alt="Select image"
                      width="25"
                      height="25"
                      
                    />
                    <S.Name>{firstLetterUppercase(user.name)}</S.Name>
                  </S.User>
                );
              }
            })}
          </S.Div>
          <S.Div>
            <S.Label>gestores</S.Label>
            {userOnSector.map((user, key) => {
              if (user.permission == "3") {
                return (
                  <S.User key={key}>
                    <Image
                      src={user?.imageProfile ?? userProfile}
                      title={user.name}
                      alt="Select image"
                      width="25"
                      height="25"
                    />
                    <S.Name>{firstLetterUppercase(user.name)}</S.Name>
                  </S.User>
                );
              }
            })}
          </S.Div>
        </S.Users>
      </S.ListToGest>
    </S.Container>
  );
};
export default ModalListUser;
