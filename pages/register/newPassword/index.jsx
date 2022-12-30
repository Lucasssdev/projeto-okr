
import GuestLayout from '../../../assets/Layout/GuestLayout';
import * as S from '../../../assets/Styles/NewPassword'
import React, { useState } from 'react';
import Input from '../../../assets/Componets/Inputs/Input';
import { faEnvelope, faArrowRight } from '@fortawesome/pro-thin-svg-icons';
import ButtonSubmit from '../../../assets/Componets/Buttons/ButtonSubmit';
import Header from '../../../assets/Layout/GuestLayout/Componets/Header';



export default function NewPassword() {

  const [message,setmessage] = useState(false)
  const [email,setEmail] = useState('')

  const handleOnChange = (e)=> {
    const value = e.target.value;
    setEmail(value);
  }

  const handleNewPassword = () => {
    setmessage(true)
  }

  return (
  <S.Container>
    {
      !message 
      ?
      <>
        <Header Title='Criar nova senha' SubTitle='Você não está perdido nessa, vamos ter ajudar a criar uma nova senha de acesso'/>
        <section>
            <Input Placeholder='E-mail' Icon={faEnvelope} Type={'text'} onChange={handleOnChange } Id={'email'} Value={email}/>
            <ButtonSubmit Text='SOLICITAR NOVA SENHA' Icon={faArrowRight} onClick={handleNewPassword}/>

            <S.Link>
                <span>LEMOBROU QUAL É A SENHA? <a href="../login">CLIQUE AQUI</a></span>
            </S.Link>
        </section>
      </>
        :
        <S.Message>
            <Header Title='ATENÇÃO!' SubTitle={`Agora Lucas, você precisa acessar o seu e-mail e clicar no botão de “CRAIR NOVA SENHA” para prosseguir com sua solicitação.`}/>
        </S.Message>
    }
  </S.Container> 
  )
}
NewPassword.getLayout = function getLayout(page) {
  return (
      <GuestLayout>{page}</GuestLayout>
  )
}
