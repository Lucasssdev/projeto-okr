/* eslint-disable react/prop-types */
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function ButtonMain({ Text, Icon, onClick, image, Route }) {
  const router = useRouter();
  const pathname = router.pathname;

  const [select, setSelect] = useState(false);

  const buttonSelect = () => {
    if (pathname == Route) setSelect(true);
  };

  useEffect(() => {
    setSelect(false);
    buttonSelect();
  }, [onClick]);
  return (
    <S.Div onClick={onClick} select={select}>
      <S.Border>{/* Borda lateral para hover/select */}</S.Border>
      {!Icon ? (
        <Image src={image} alt="Select image" width="35" height="35" />
      ) : (
        <S.Icon>
          <FontAwesomeIcon icon={Icon} size="xl" />
        </S.Icon>
      )}

      <S.Text>{Text}</S.Text>
    </S.Div>
  );
}

export default ButtonMain;
