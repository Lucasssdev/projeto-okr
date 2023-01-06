import GuestLayout from "../../../assets/Layout/GuestLayout";
import * as S from "../../../assets/Styles/CreateAccount";
import React, { useState } from "react";
import Input from "../../../assets/Componets/Inputs/Input";
import {
  faArrowRight,
  faUser,
  faEnvelope,
  faMobile,
  faBuilding,
  faLock,
} from "@fortawesome/pro-thin-svg-icons";
import ButtonSubmit from "../../../assets/Componets/Buttons/ButtonSubmit";
import Header from "../../../assets/Layout/GuestLayout/Componets/Header";
import { useRouter } from "next/router";
import axios from "axios";
import phoneMask from "../../../assets/Mask/phoneMask";
import nameMask from "../../../assets/Mask/nameMask";
import firstLetterUppercase from "../../../assets/Mask/firstLetterUppercase";
import emailMaskTest from "../../../assets/Mask/emailMasktest";

export default function CreateAccount() {
  const router = useRouter();
  const [nextScreen, setNextScreen] = useState(false);

  const [adm, setAdm] = useState({
    company: "",
    email: "",
    name: "",
    password: "",
    password2: "",
    permission: "1",
    tel: "",
  });

  const handleOnChange = (e) => {
    const value = e.target.value;
    const key = e.target.id;
    if (key === "tel") {
      value.length < 16
        ? setAdm((user) => ({
            ...user,

            [key]: phoneMask(value),
          }))
        : null;
    } else if (key == "name") {
      setAdm((user) => ({
        ...user,

        [key]: nameMask(value),
      }));
    } else if (key == "company") {
      setAdm((user) => ({
        ...user,

        [key]: firstLetterUppercase(value),
      }));
    } else {
      setAdm((user) => ({
        ...user,

        [key]: value,
      }));
    }
  };
  const validationFields = (e) => {
    e.preventDefault();
    if (!nextScreen) {
      if (
        adm.name != "" &&
        adm.company != "" &&
        adm.tel.length > 14 &&
        !nextScreen
      ) {
        setNextScreen(true);
      } else if (!nextScreen) {
        alert("Preencha corretamente os campos");
        return;
      }
    } else {
      if (emailMaskTest(adm.email) && adm.password != "") {
    
        if (adm.password == adm.password2 ) {
          delete adm.password2;
          console.log(adm);
          handleOnForm(adm);
        } else {
          alert("As senhas não são iguais");
          return;
        }
      } else {
        alert("E-mail ou senha inválidos");
        return;
      }
    }
  };
  const handleOnForm = async () => {
    await axios
      .post("../api/Users/user", {
        data: {
          adm,
        },
      })
      .then(async function (response) {
        console.log(response);
        if (response.status == 200) {
          router.push({
            pathname: "/register/inviteTeam",
            query: { companyId: response.data.companyId },
          });
        }
      })
      .catch((error) => {
        console.log(error);
        //router.push("/login");
      });
  };

  return (
    <S.Container>
      <Header
        Title="Crie sua conta"
        SubTitle="Sua alta performance te aguarda no lado da produtividade"
      />
      <S.Form>
        {!nextScreen ? (
          <>
            <Input
              Placeholder="Nome completo"
              Icon={faUser}
              Type={"text"}
              onChange={handleOnChange}
              Id={"name"}
              Value={adm.name}
            />
            <Input
              Placeholder="Digite seu DDD + Whatsapp "
              Icon={faMobile}
              Type={"tel"}
              onChange={handleOnChange}
              Id={"tel"}
              Value={adm.tel}
            />
            <Input
              Placeholder="Nome da sua empresa"
              Icon={faBuilding}
              Type={"text"}
              onChange={handleOnChange}
              Id={"company"}
              Value={adm.company}
            />

            <ButtonSubmit
              Text="Próximo passo"
              Icon={faArrowRight}
              onClick={validationFields}
            />
          </>
        ) : (
          <>
            <Input
              Placeholder="Digite seu e-mail"
              Icon={faEnvelope}
              Type={"email"}
              onChange={handleOnChange}
              Id={"email"}
              Value={adm.email}
            />
            <Input
              Placeholder="Crie sua senha"
              Icon={faLock}
              Type={"password"}
              onChange={handleOnChange}
              Id={"password"}
              Value={adm.password}
            />
            <Input
              Placeholder="Confirme sua senha"
              Icon={faLock}
              Type={"password"}
              onChange={handleOnChange}
              Id={"password2"}
              Value={adm.password2}
            />
            <ButtonSubmit
              Text="Próximo passo"
              Icon={faArrowRight}
              onClick={validationFields}
            />
          </>
        )}
        <S.Link>
          <span>
            Já tem uma conta? <a href="../login">CLIQUE AQUI</a>
          </span>
        </S.Link>
      </S.Form>
    </S.Container>
  );
}
CreateAccount.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};
