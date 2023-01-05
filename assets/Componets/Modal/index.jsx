import React, { useState, useEffect } from "react";
import * as S from "./styles";
import axios from "axios";
import { faPlusCircle } from "@fortawesome/pro-solid-svg-icons";
import {
  faBullseyePointer,
  faArrowRight,
  faTextWidth,
  faXmark,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../Inputs/Input";
import ButtonSubmit from "../Buttons/ButtonSubmit";


function DialogCreateOkr(IDs) {
  console.log(IDs);
  const [showModal, setShowModal] = useState(false);
  const [okr, setOkr] = useState({
    name: "",
    description: "",
    deadline: "",
    manager_id: IDs.user,
    company_id: IDs.company,
  });
  const handleOnChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setOkr((okr) => ({
      ...okr,

      [key]: value,
    }));
  };

  const cancel = () => {
    setOkr({
      name: "",
      description: "",
      deadline: "",
      manager_id: IDs.user,
      company_id: IDs.company,
    });
    setShowModal(false);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("../api/okrs/okr", {
        data: okr,
      })
      .then(function (response) {
        console.log(response);
        //setShowModal(false);

        setOkr({
          name: "",
          description: "",
          deadline: "",
          manager_id: IDs.user,
          company_id: IDs.company,
        });
      })
      .catch((error) => {
        return error;
      });
  };

  useEffect(() => {
    console.log(okr);
  }, [okr]);

  return (
    <S.Container>
      <S.DivExtern>
        <S.ButtonExt onClick={() => setShowModal(true)}>
          <span>
            Adicionar <strong>OKR</strong>
          </span>
          <FontAwesomeIcon icon={faPlusCircle} size="xl" />
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
                registrar <strong> nova okr</strong>
              </label>
              <Input
                Placeholder={"Objetivo chave"}
                Icon={faBullseyePointer}
                Type={"text"}
                Id={"name"}
                Value={okr.name}
                onChange={handleOnChange}
              />
              <Input
                Placeholder={"Prazo final de realização"}
               
                Type={"date"}
                Id={"deadline"}
                Value={okr.deadline}
                onChange={handleOnChange}
              />
              <S.Area>
                <S.TextArea
                  placeholder={"Explicação breve para este OKR"}
                  id={"description"}
                  Value={okr.description}
                  type={"text"}
                  onChange={handleOnChange}
                ></S.TextArea>
                <S.Icon>
                  <FontAwesomeIcon icon={faTextWidth} size="lg" />
                </S.Icon>
              </S.Area>

              <ButtonSubmit
                onClick={handleSubmitForm}
                Icon={faArrowRight}
                Text={"Próximo passo"}
              />
            </S.Form>
          </S.DivModalWrapper>
        </S.DivModal>
      ) : null}
    </S.Container>
  );
}

export default DialogCreateOkr;
