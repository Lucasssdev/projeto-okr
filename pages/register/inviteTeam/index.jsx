/* eslint-disable react/jsx-key */

import GuestLayout from "../../../assets/Layout/GuestLayout";
import * as S from "../../../assets/Styles/InviteTeam";
import React, { useEffect, useState } from "react";
import { faArrowRight } from "@fortawesome/pro-thin-svg-icons";
import ButtonSubmit from "../../../assets/Componets/Buttons/ButtonSubmit";
import Header from "../../../assets/Layout/GuestLayout/Componets/Header";
import DynamicInput from "../../../assets/Componets/Inputs/DynamicInput";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import axios from "axios";
import emailMaskTest from "../../../assets/Mask/emailMasktest";

export default function InviteTeam() {
  const router = useRouter();
  const companyId = router.query.companyId;

  const [admin, setAdmin] = useState({});
  const [emails, setEmails] = useState({
    firstEmail: "",
    secondEmail: "",
  });

  const validationEmails = (emails) => {
    for (let data in emails) {
      console.log(data, "DATAA");
      if (emails[data] == "") {
        delete emails[data];
      } 
    } 
    for (let data in emails) {
      console.log(data, "DATAA");
      if (emailMaskTest(emails[data]) == false) {
        return false;
      }
    } 
    console.log(emails)
    return true
   
  };
  const handleInviteTeam = async (e) => {
    e.preventDefault();
    await getadm(companyId);

    if (!validationEmails(emails) ) {
      alert("Verifique os e-mails");
      return;
    } else {
      const team = Object.values(emails);

      console.log(team, "TEAM");
    
      if (team.length > 0) {
        await axios
          .post("../api/Users/user", {
            data: {
              team,
              companyId,
            },
          })
          .then(async function (response) {
            console.log(response);
            if (response.status == 200) {
              console.log(response);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };
  const makeLogin = async (idAdm) => {
    console.log(idAdm, "LOGIN");

    await axios
      .post("../api/Auth/authLogin", {
        data: idAdm,
        withCredentials: true,
      })
      .then(function (response) {
        setCookie("userLogged", response.data);
        router.reload();
      })
      .catch((error) => {
        console.log(error);
        //router.push("/login");
      });
  };
  const getadm = async (id) => {
    console.log(id, "ID");
    await axios
      .get("../../api/Users/user?companyId=" + id)
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
          const arrUser = response.data;
          console.log(arrUser);
          for (var i = 0; i < arrUser.length; i++) {
            console.log(arrUser[i]);
            if (arrUser[i].permission == "1") {
              setAdmin(arrUser[i]);
            }
          }
        }
      })
      .catch((error) => {
        return error, console.log("nao foii");
      });
  };

  useEffect(() => {
    if (admin.id) makeLogin(admin.id);
  }, [admin]);

  return (
    <S.Container>
      <Header
        Title="Crie sua conta"
        SubTitle="Sua alta performance te aguarda no lado da produtividade!"
      />
      <section>
        <DynamicInput emails={emails} setEmails={setEmails} />
        <ButtonSubmit
          Text="CONCLUIR CADASTRO"
          Icon={faArrowRight}
          onClick={handleInviteTeam}
        />

        <S.Link>
          <span>
            Fique tranquilo se não tiver os e-mails.
            <br />
            Essa etapa pode ser feita em outro momento!
          </span>
          <button onClick={""}>pular etapa</button>
        </S.Link>
      </section>
    </S.Container>
  );
}
InviteTeam.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};
