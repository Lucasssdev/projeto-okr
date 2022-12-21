
import GuestLayout from '../../assets/Layout/GuestLayout';
import * as S from '../../assets/Styles/UpdatePassword'
import React, { useState } from 'react';
import Input from '../../assets/Componets/Inputs/Input';
import {  faLock, faArrowRight} from '@fortawesome/pro-thin-svg-icons';
import ButtonSubmit from '../../assets/Componets/Buttons/ButtonSubmit';
import Header from '../../assets/Layout/GuestLayout/Componets/Header';



export default function UpdatePassword() {
  
  const [Passwords,setPasswords] = useState({  
    password: '',
    password2: '',
  })

  const handleOnChange = (e)=> {
    const value = e.target.value;
    const key = e.target.id
    setPasswords((pass) => ({
        ...pass,
        [key]: value,
      }));
      
  }
  const handleOnForm = () => {
    null
  }
  return (
  <S.Container>
    <Header Title='Criar nova senha' SubTitle='Você não está perdido nessa, vamos ter ajudar a criar uma nova senha de acesso'/>
    <section>
        <Input Placeholder='Nova senha' Icon={faLock} Type={'password'} onChange={handleOnChange } Id={'password'} Value={Passwords.password}/>
        <Input Placeholder='Confirmar nova senha' Icon={faLock} Type={'password'} onChange={handleOnChange } Id={'password2'} Value={Passwords.password2}/>
        <ButtonSubmit Text='ATUALIZAR SENHA' Icon={faArrowRight} onClick={handleOnForm}/>

        <S.Link>
            <span><a href="../login">CANCELAR</a></span>
        </S.Link>
    </section>
    
    

  </S.Container> 
  )
}
UpdatePassword.getLayout = function getLayout(page) {
  return (
      <GuestLayout>{page}</GuestLayout>
  )
}
