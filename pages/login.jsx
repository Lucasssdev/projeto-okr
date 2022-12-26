import GuestLayout from "../assets/Layout/GuestLayout";
import * as S from "../assets/Styles/Login";
import React, { useState } from "react";
import Input from "../assets/Componets/Inputs/Input";
import {
  faLock,
  faArrowRight,
  faEnvelope,
} from "@fortawesome/pro-thin-svg-icons";
import ButtonSubmit from "../assets/Componets/Buttons/ButtonSubmit";
import Header from "../assets/Layout/GuestLayout/Componets/Header";
import { getCookie, setCookie } from "cookies-next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Login() {
  const router = useRouter();

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
    axios
      .post("api/Auth/authLogin", {
        data: login,
        withCredentials: true,
      })
      .then(function (response) {
        setCookie("userLogged", response.data);
        verifyIfCookieExists()
      })
      .catch((error) => {
        console.log(error);
        //router.push("/login");
      });
  };
  const verifyIfCookieExists = async () => {
    const cookieExists = getCookie("userLogged");
    if (cookieExists) {
      router.push("/");
    }
  };
  verifyIfCookieExists();
  useEffect(() => {
console.log(login)  }, [login]);
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
