/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Input from "../Input";
import React from "react";
import * as S from "./styles";
import { faPlusCircle } from "@fortawesome/pro-solid-svg-icons";
import { faEnvelope } from "@fortawesome/pro-thin-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DYnamicInput({ emails, setEmails }) {
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

  return (
    <S.Container>
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
          <button title="Adicionar novo e-mail" onClick={newField}>
            <FontAwesomeIcon icon={faPlusCircle} size="3x" />
          </button>
        }
      </S.NewField>
    </S.Container>
  );
}
