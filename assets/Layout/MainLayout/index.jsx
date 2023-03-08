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
  faBookmark,
  faSignIn,
  faMagnifyingGlass,
} from "@fortawesome/pro-thin-svg-icons";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";
import DialogCreateOkr from "../../Componets/ModalOkr";
import userProfile from "../../../public/userProfile.svg";
import useBearStore from "../../Util/zustand";
import { Decode } from "../../../src/decodeBase64";

export default function MainLayout({ children }) {
  const router = useRouter();
  const [myUser, setMyUser] = useState();
  const [myCompany, setMyCompany] = useState();

  const user = useBearStore((state) => state.myUser);
  const company = useBearStore((state) => state.myCompany);

  const logout = () => {
    deleteCookie("userLogged");
    router.push("/login");
  };
  const imageProfile = myUser?.imageProfile ?? userProfile;
  useEffect(() => {
    setMyUser(() => Decode(user));
  }, [user]);
  useEffect(() => {
    setMyCompany(() => Decode(company));
  }, [company]);
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
              Icon={faBookmark}
              Text={"Setores"}
              onClick={() => {
                router.push("/sectors");
              }}
            />
          </div>
          <S.Footer>
            <ButtonMain
              Route={"/profile/user"}
              image={imageProfile}
              Text={myUser?.name}
              onClick={() => {
                router.push("/profile/user");
              }}
            />
            <ButtonMain
              Route={"/profile/company"}
              Icon={faBuilding}
              Text={myCompany?.name}
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
          <DialogCreateOkr user={myUser?.id} company={myCompany?.id} />
        </S.Header>
        {/*showSearch ?  <SearchList result={result} getSearch={getSearch} search={search}/> : <article>{children}</article> */}
        <article>{children}</article>
      </S.ContainerMain>
    </S.Container>
  );
}
