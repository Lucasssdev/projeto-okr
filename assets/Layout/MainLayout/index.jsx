/* eslint-disable react/prop-types */
import * as S from "./styles";
import React, { useEffect, useState } from "react";
import logoPurple from "../../../public/logoPurple.svg";
import Image from "next/image";
import ButtonMain from "../../Componets/Buttons/ButtonMain";
import InputSearch from "../../Componets/Inputs/InputSearch";
import {
  faBuilding,
  faHouse,
  faBookBookmark,
  faSignIn,
  faMagnifyingGlass,
} from "@fortawesome/pro-regular-svg-icons";
import { getCookie } from "cookies-next";
import { isValid } from "../../../src/jwt/isValidToken";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";
import DialogCreateOkr from "../../Componets/Modal";
import userProfile from "../../../public/userProfile.svg";
import axios from "axios";
//import create from 'zustand'

export default function MainLayout({ children }) {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [company, setCompany] = useState({});
  const appToken = getCookie("userLogged") ?? null;

  const payload = async (token) => {
    const payload = await isValid(token);
    getUser(payload?.user.id);
    setCompany({
      id: payload?.user.company.id,
      name: payload?.user.company.name,
    });
  };

  const getUser = async (id) => {
    console.log(id, "ID");
    await axios
      .get("../api/Users/user?id=" + id)
      .then(function (response) {
        if (response.status === 200) {
          return response.data,
          setUser(response.data);
          //console.log(response.data);
          //setBase64code(response.data.imageProfile);
        }
      })
      .catch((error) => {
        return error, console.log("nao foii");
      });
  };
  const logout = () => {
    deleteCookie("userLogged");
    router.push("/login");
  };
  /*const myUser = create((set) => ({
    myUser: user,
    get: async () => {const update = await getUser(user.id)
    set(state => ({ update }));
    },
  }))
  console.log(myUser,'USERRR')*/
  const imageProfile = user.imageProfile ?? userProfile;
  useEffect(() => {
    payload(appToken);
  }, []);
  useEffect(() => {
    console.log(user);
  }, [user]);

 
  return (
    <S.Container>
      <S.Main>
        <S.Logo>
          <Image width={200} src={logoPurple} alt="logo" />
        </S.Logo>
        <S.Options>
          <div>
            <ButtonMain
              Route={"/dashboard"}
              Icon={faHouse}
              Text={"Inicio"}
              onClick={() => {
                router.push("/dashboard");
              }}
            />
            <ButtonMain
              Route={"/sectors"}
              Icon={faBookBookmark}
              Text={"Setor"}
              onClick={() => {
                router.push("/sectors");
              }}
            />
          </div>
          <S.Footer>
            <ButtonMain
              Route={"/profile/user"}
              image={imageProfile}
              Text={user.name}
              onClick={() => {
                router.push("/profile/user");
              }}
            />
             <ButtonMain
              Route={"/profile/company"}
              Icon={faBuilding}
              Text={company.name}
              onClick={() => {
                router.push("/profile/company");
              }}
            />
            <ButtonMain
              Route={""}
              Icon={faSignIn}
              Text={"Sair do Gestor OKR"}
              onClick={logout}
            />
           
          </S.Footer>
        </S.Options>
      </S.Main>
      <S.ContainerMain>
        <S.Header>
          <S.Search>
            <InputSearch
              Placeholder="Pesquisao OKR ou Setor"
              Icon={faMagnifyingGlass}
            />
          </S.Search>
          <DialogCreateOkr user={user.id} company={company.id} />
        </S.Header>
        {/*showSearch ?  <SearchList result={result} getSearch={getSearch} search={search}/> : <article>{children}</article> */}
        <article>{children}</article>
      </S.ContainerMain>
    </S.Container>
  );
}

