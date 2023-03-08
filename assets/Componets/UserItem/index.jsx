/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessRookPiece,
  faChessPawn,
  faChessBishopPiece,
} from "@fortawesome/pro-thin-svg-icons";
import React from "react";
import Image from "next/image";
import userProfile from "../../../public/userProfile.svg";

const UserItem = ({ user,sector }) => {
  console.log(user);
  const permission = user.permission;
  const iconPermission = (permission) => {
    return permission == "1"
      ? faChessBishopPiece
      : permission == "2"
      ? faChessRookPiece
      : faChessPawn;
  };
  const labelPermission = (permission) => {
    return permission == "1" ? "ADM" : permission == "2" ? "GEST." : "COLAB.";
  };
  const colorIcon = (permission) => {
    const color =
      permission == "1" ? "#FC9E2F" : permission == "2" ? "#25F9A0" : "#fff.";
    return color;
  };

  const nameArray = user.name.split(" ");
  const myName = {
    firtName: nameArray[0],
    surname: nameArray.length == 1 ? "" : nameArray[nameArray.length - 1],
  };

  return (
    <S.Li>
      <S.Image>
        <Image
          src={user?.imageProfile ?? userProfile}
          title={user.name}
          alt="Select image"
          width="70"
          height="70"
        />
      </S.Image>
      <S.Data>
        <S.Icon>
          <FontAwesomeIcon
            icon={iconPermission(permission)}
            color={colorIcon(permission)}
            size="2x"
          />
          <span>{labelPermission(permission)}</span>
        </S.Icon>
        <S.Text>
          <S.Name>
            {myName.firtName + " "}
            <text>{myName.surname}</text>
          </S.Name>
          <S.Officie>{user.Officie ?? "CARGO EMPRESA"}</S.Officie>
          <S.Sector>{sector?.name ?? user.sector.name}</S.Sector>
        </S.Text>
      </S.Data>
      <S.Score>
        <S.Box>
          99
          <span>
            <strong>okrs</strong> abertas
          </span>
        </S.Box>
        <S.Box>
          989
          <span>
            <strong>okrs</strong> prontas
          </span>
        </S.Box>
        <S.Box>
          9.9
          <span>
            <strong>nota</strong> média
          </span>
        </S.Box>
      </S.Score>
    </S.Li>
  );
};
export default UserItem;
