/* eslint-disable react/prop-types */
import React, { useState } from "react";
import * as S from "./styles";
import {
  faArrowRight,
  faBookmark,
  faXmark,

  faPlusCircle
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../Inputs/Input";
import ButtonSubmit from "../Buttons/ButtonSubmit";


function DialogCreateSector({setSector, sector, createSector }) {
  console.log(sector);
  const [showModal, setShowModal] = useState(false);

  const handleOnChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setSector((sector) => ({
      ...sector,

      [key]: value,
    }));
  };

  const cancel = () => {
    setSector({
      ...sector,
      name: ""
      
    });
    setShowModal(false);
  };
  return (
    <S.Container>
      <S.DivExtern>
        <S.ButtonExt >
          <FontAwesomeIcon icon={faPlusCircle} size="xl" onClick={() => setShowModal(true)} />
        </S.ButtonExt>
      </S.DivExtern>
      {showModal ? (
        <S.DivModal>
          <S.CancelZone onClick={cancel}></S.CancelZone>
          <S.DivModalWrapper>
            <S.ButtonX onClick={cancel}>
              <FontAwesomeIcon icon={faXmark} size="2x" />
            </S.ButtonX>
            <S.Form>
              <label htmlFor="name">
                Criar <strong> novo setor</strong>
              </label>
              <Input
                Placeholder={"Nome do setor"}
                Icon={faBookmark}
                Type={"text"}
                Id={"name"}
                Value={sector.name}
                onChange={handleOnChange}
              />
              <ButtonSubmit
                onClick={createSector}
                Icon={faArrowRight}
                Text={"Cadastrar"}
              />
            </S.Form>
          </S.DivModalWrapper>
        </S.DivModal>
      ) : null}
    </S.Container>
  );
}

export default DialogCreateSector;
