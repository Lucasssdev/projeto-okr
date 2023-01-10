import GuestLayout from "../../assets/Layout/GuestLayout";
import * as S from "../../assets/Styles/Login";
import React, { useState } from "react";
import Input from "../../assets/Componets/Inputs/Input";
import {
  faLock,
  faArrowRight,
  faEnvelope,
} from "@fortawesome/pro-thin-svg-icons";
import ButtonSubmit from "../../assets/Componets/Buttons/ButtonSubmit";
import Header from "../../assets/Layout/GuestLayout/Componets/Header";
import { getCookie, setCookie } from "cookies-next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useBearStore from "../../assets/Util/zustand";
import {Base64} from "js-base64";

export default function Login() {
  const router = useRouter();
  const setMyUser = useBearStore((state) => state.setUser);
  const setMyCompany = useBearStore((state) => state.setCompany);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const value = e.target.value;
    const key = e.target.id;
    setLogin((date) => ({
      ...date,

      [key]: value,
    }));
  };

  const makeLogin = async (login) => {
    await axios
      .post("api/Auth/authLogin", {
        data: login,
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response);
        const jsonStringUser = JSON.stringify(response.data.user);
        const base64EncodedUser = Base64.encode(jsonStringUser);
        const jsonStringCompany = JSON.stringify(response.data.user.company);
        const base64EncodedCompany = Base64.encode(jsonStringCompany);
        setMyUser(base64EncodedUser);
        setMyCompany(base64EncodedCompany)

        setCookie("userLogged", response.data.newToken);
        verifyIfCookieExists();
      })
      .catch((error) => {
        console.log(error);
        //router.push("/login");
      });
  };
  const verifyIfCookieExists = async () => {
    const cookieExists = getCookie("userLogged");
    if (cookieExists) {
      router.push("/dashboard");
    }
  };

  useEffect(() => {
    console.log(login);
  }, [login]);
  return (
    <S.Container>
      <Header
        Title="Realize seu login"
        SubTitle="Sua alta performance te aguarda no lado da produtividade"
      />
      <section>
        <Input
          Placeholder="E-mail"
          Icon={faEnvelope}
          Type={"email"}
          onChange={handleOnChange}
          Id={"email"}
          Value={login.email}
        />
        <Input
          Placeholder="Senha"
          Icon={faLock}
          Type={"password"}
          onChange={handleOnChange}
          Id={"password"}
          Value={login.password}
        />
        <ButtonSubmit
          Text="Entrar"
          Icon={faArrowRight}
          onClick={() => {
            makeLogin(login);
          }}
        />

        <S.Link>
          <span>
            Não tem uma conta?{" "}
            <a href="./register/createAccount">CADASTRE-SE AQUI</a>
          </span>
          <a href="./register/newPassword">PRECISO DE UMA NOVA SENHA</a>
        </S.Link>
      </section>
    </S.Container>
  );
}
Login.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};
