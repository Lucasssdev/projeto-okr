import { deleteCookie } from "cookies-next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as S from "../../assets/Styles/ExpiredToken";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceDizzy } from "@fortawesome/pro-thin-svg-icons";
export default function ExpiredToken() {
  const router = useRouter();

  deleteCookie("userLogged");

  useEffect(() => {
    router.reload();
  }, [deleteCookie]);

  return (
    <S.Container>
      <FontAwesomeIcon icon={faFaceDizzy} size="9x" />
      <h1>Sua sesso foi expirada!</h1>ã
      <p>Faça login para continuar...</p>
    </S.Container>
  );
}
