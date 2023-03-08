/* eslint-disable react/prop-types */
import React from "react";
import * as S from "./styles";
import { useState, useEffect, forwardRef } from "react";
import Image from "next/image";
import userProfile from "../../../public/userProfile.svg";
import userCirclePlus from "../../../public/userCirclePlus.svg";
import ModalListUser from "../ModalListUsers";
import axios from "axios";

const TeamUniqueUser = ({
  userOnSector,
  sector,
  allUsers,
  widthImg,
  heightImg,
  getTeam,
  getSector
  
}) => {


  const listColabRef = forwardRef();
  const listGestRef = forwardRef();

  const [showListUsers, setShowListUsers] = useState(false);
  const [coordinates, setCoordinates] = useState();
  const [isGestor, setIsGestor] = useState(false);
  const [userSelected, setUserSelected] = useState();
  const [usersSector, setUsersSector] = useState(userOnSector);
  const [allUsersState, setAllUsersState] = useState(allUsers);
  const [idUsersSector, setIdUsersSector] = useState([]);
  let maxUsers = 0;

  const getNewSector = async (id) => {
   
    await axios
      .get("../api/Sectors/sector?id=" + id)
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
          setUsersSector(response.data.users);
          //getSector(response.data)
        }
      })
      .catch((error) => {
        return error, console.log(error);
      });
  };
  const getNewTeam = async (id) => {
    
    await axios
      .get("../api/Users/user?companyId=" + id)
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
          setAllUsersState(response.data);
          //getTeam(response.data)
        }
      })
      .catch((error) => {
        return error, console.log("nao foii");
      });
  };
  const addInSector = async (idUser) => {
    setShowListUsers(false);
    const adm = allUsers.filter((item) => item.permission == "1");
    const newData = {
      id: idUser,
      sectors_id: sector.id,
      permission: adm[0].id != idUser ? (isGestor ? "2" : "3") : "1",
    };
    await axios
      .put("../api/Users/user", {
        data: newData,
      })
      .then(function (response) {
        console.log("+++", response);
        getNewSector(sector.id);
        getNewTeam(sector.id)
      })
      .catch((error) => {
        S;
        console.log(error);
      });
  };

  useEffect(() => {
    userOnSector.map((user) => {
      console.log(user);
      let allIds = idUsersSector;
      allIds.push(user.id);
      setIdUsersSector(allIds);
    });
  }, []);
  useEffect(() => {
    console.log(idUsersSector);
  }, [idUsersSector]);
  useEffect(() => {
    console.log(userSelected);
    if (userSelected) addInSector(userSelected);
  }, [userSelected]);

  useEffect(() => {
    if (showListUsers) {
      if (isGestor) {
        const rect = listGestRef.current.getBoundingClientRect();
        setCoordinates({
          ...coordinates,
          xGestor: rect.x,
          yGestor: rect.y,
        });
      } else {
        const rect = listColabRef.current.getBoundingClientRect();
        setCoordinates({ ...coordinates, xColab: rect.x, yColab: rect.y });
      }
    }
  }, [showListUsers]);

  return (
    <S.Users>
      <S.ImageGestor>
        <div>
          {usersSector
            .filter((item) => item.permission == "2" || item.permission == "1")
            .map((user, index) => {
              if (index < 3) {
                return (
                  <Image
                    ref={listGestRef}
                    src={user?.imageProfile ?? userProfile}
                    title={user.name}
                    key={index}
                    alt="Select image"
                    width={widthImg}
                    height={heightImg}
                    onClick={() => {
                      setIsGestor(true);
                      setShowListUsers(true);
                    }}
                  />
                );
              }
            })}
          <Image
            ref={listGestRef}
            src={userCirclePlus}
            title={"Adiconar gestor"}
            alt="Select image"
            width={widthImg}
            height={heightImg}
            onClick={() => {
              setIsGestor(true);
              setShowListUsers(true);
            }}
          />
        </div>
        <span>GESTOR</span>
      </S.ImageGestor>
      <S.ImageColabs>
        <div>
          {usersSector.length > 0
            ? usersSector.map((user, index) => {
                if (maxUsers < 4 && user.permission == "3") {
                  maxUsers++;
                  return (
                    <Image
                      src={user?.imageProfile ?? userProfile}
                      title={user.name}
                      key={index}
                      alt="Select image"
                      width={widthImg}
                      height={heightImg}
                    />
                  );
                }
              })
            : null}

          <Image
            ref={listColabRef}
            src={userCirclePlus}
            title={"Adicionar colaborador"}
            alt="image"
            width={widthImg}
            height={heightImg}
            onClick={() => {
              setIsGestor(false);
              setShowListUsers(true);
            }}
          />
        </div>
        <span>COLABORADORES</span>
      </S.ImageColabs>
      {showListUsers && isGestor ? (
        <ModalListUser
          coordinatesY={coordinates?.yGestor}
          coordinatesX={coordinates?.xGestor}
          allUsers={allUsersState}
          setUserSelected={setUserSelected}
          setShowListUsers={setShowListUsers}
        />
      ) : showListUsers && !isGestor ? (
        <ModalListUser
          coordinatesY={coordinates?.yColab}
          coordinatesX={coordinates?.xColab}
          allUsers={allUsersState}
          setUserSelected={setUserSelected}
          setShowListUsers={setShowListUsers}
        />
      ) : null}
    </S.Users>
  );
};
export default TeamUniqueUser;
