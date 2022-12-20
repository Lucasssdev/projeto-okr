/* eslint-disable react/prop-types */
import * as S from "./styles";
import React from "react";
import Image from "next/image";
import logoPurple from '../../../public/logoPurple.svg'



export default function GuestLayout( {children}  ) {

    return (
        <S.Container>
            <S.WhiteSpacing>
            </S.WhiteSpacing>
            <S.Content>
                <Image src={logoPurple} width={400} alt='Logo Image'/>
                <article>{children}</article>
            </S.Content>
        </S.Container>
    );
}
