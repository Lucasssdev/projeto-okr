/* eslint-disable react/prop-types */
import React from "react";
import * as S from "./styles";
import { useState, useEffect, forwardRef } from "react";
import Image from "next/image";
import userProfile from "../../../public/userProfile.svg";
import userCirclePlus from "../../../public/userCirclePlus.svg";
import ModalListUser from "../ModalListUsers";

const TeamUniqueUser = ({ userOnSector }) => {
  console.log(userOnSector);
  const myRef = forwardRef();
  const listGestRef = forwardRef();

  const [showListUsers, setShowListUsers] = useState(false);
  const [coordinates, setCoordinates] = useState();
  const [isGestor, setIsGestor] = useState(false);

 
  useEffect(() => {
    console.log(coordinates);
  }, [coordinates]);

  useEffect(() => {
    if (showListUsers) {
      console.log(myRef);
      if (isGestor) {
        const rect = listGestRef.current.getBoundingClientRect();
        console.log(rect);
        setCoordinates({
          ...coordinates,
          xGestor: rect.x,
          yGestor: rect.y,
        });
      } else {
        const rect = myRef.current.getBoundingClientRect();
        console.log(rect);
        setCoordinates({ ...coordinates, xColab: rect.x, yColab: rect.y });
      }
    }
  }, [showListUsers]);

  return (
    <S.Users>
      <S.ImageGestor>
        <div>
          {userOnSector.map((user, index) => {
            if (index < 4 && user.permission == "1") {
              return (
                <Image
                  ref={listGestRef}
                  src={user?.imageProfile ?? userProfile}
                  title={user.name}
                  key={index}
                  alt="Select image"
                  width="40"
                  height="40"
                  onClick={() => {
                    setIsGestor(true);
                    setShowListUsers(true);
                  }}
                />
              );
            }
          })}
        </div>
        <span>GESTOR</span>
      </S.ImageGestor>
      <S.ImageColabs>
        <div>
          {userOnSector.map((user, index) => {
            if (index < 5) {
              return (
                <Image
                  src={user?.imageProfile ?? userProfile}
                  title={user.name}
                  key={index}
                  alt="Select image"
                  width="40"
                  height="40"
                />
              );
            }
          })}
        </div>
        <span>COLABORADORES</span>
      </S.ImageColabs>
      <Image
        ref={myRef}
        src={userCirclePlus}
        title={"Adicionar colaborador"}
        alt="image"
        width="40"
        height="40"
        onClick={() => {
          setIsGestor(false);
          setShowListUsers(true);
        }}
      />
      {showListUsers && isGestor ? (
        <ModalListUser
          coordinatesY={coordinates?.yGestor}
          coordinatesX={coordinates?.xGestor}
          userOnSector={userOnSector}
          setShowListUsers={setShowListUsers}
        />
      ) : showListUsers && !isGestor ? (
        <ModalListUser
        coordinatesY={coordinates?.yColab}
        coordinatesX={coordinates?.xColab}          
        userOnSector={userOnSector}
          setShowListUsers={setShowListUsers}
        />
      ) : null}
    </S.Users>
  );
};
export default TeamUniqueUser;
