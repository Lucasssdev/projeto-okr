/* eslint-disable react/jsx-key */

import GuestLayout from "../../assets/Layout/GuestLayout";
import * as S from "../../assets/Styles/InviteTeam";
import React, { useEffect, useState } from "react";
import Input from "../../assets/Componets/Inputs/Input";
import { faEnvelope, faArrowRight } from "@fortawesome/pro-thin-svg-icons";
import { faPlusCircle } from "@fortawesome/pro-solid-svg-icons";
import ButtonSubmit from "../../assets/Componets/Buttons/ButtonSubmit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../assets/Layout/GuestLayout/Componets/Header";
import { useRouter } from "next/router";
import axios from "axios";
export default function InviteTeam() {
  const router = useRouter();
  const companyId = router.query;
  console.log(companyId);

  const [emails, setEmails] = useState({
    firstEmail: "",
    secondEmail: "",
  });
  const [team, setTeam] = useState([]);

  const handleOnChange = (e) => {
    const value = e.target.value;
    const key = e.target.id;
    setEmails((email) => ({
      ...email,

      [key]: value,
    }));
  };

  const newField = () => {
    //função para novo campo input
    setEmails({
      ...emails,
      [Math.random()]: "",
    });
  };

  const handleInviteTeam = () => {
    for (let data in emails) {
      console.log(data);
      let arr = team;
      arr.push(emails[data]);
      setTeam(arr);
      console.log(team);
    }

    axios
      .post("../api/Users/user", {
        data: {
          team,
          companyId
        },
      })
      .then(async function (response) {
        console.log(response);
        if (response.status == 200) {
          
          console.log(response)
        }
      })
      .catch((error) => {
        console.log(error);
        //router.push("/login");
      });
  };
  useEffect(() => {
    console.log(emails);
  }, [emails]);

  return (
    <S.Container>
      <Header
        Title="Crie sua conta"
        SubTitle="Sua alta performance te aguarda no lado da produtividade!"
      />
      <section>
        <S.DivInput>
          <>
            {Object.keys(emails).map((field) => (
              <Input
                Placeholder={"Digite o e-mail do seu colega de trabalho"}
                Icon={faEnvelope}
                Type={"email"}
                onChange={handleOnChange}
                Id={field}
                Value={emails.field}
              />
            ))}
          </>
        </S.DivInput>

        <S.NewField>
          {
            <button onClick={newField}>
              <FontAwesomeIcon icon={faPlusCircle} size="3x" />
            </button>
          }
        </S.NewField>

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
        </S.Link>
      </section>
    </S.Container>
  );
}
InviteTeam.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};
