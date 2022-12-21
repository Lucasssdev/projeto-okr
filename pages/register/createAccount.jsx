
import GuestLayout from '../../assets/Layout/GuestLayout';
import * as S from '../../assets/Styles/CreateAccount'
import React, { useState } from 'react';
import Input from '../../assets/Componets/Inputs/Input';
import { faArrowRight, faUser,faEnvelope,faMobile,faBuilding,faLock} from '@fortawesome/pro-thin-svg-icons';
import ButtonSubmit from '../../assets/Componets/Buttons/ButtonSubmit';
import Header from '../../assets/Layout/GuestLayout/Componets/Header';



export default function CreateAccount() {

  const [datas,setDatas] = useState({ 
    name: "",
    email: '',
    tel: '',
    company: '', 
    password: '',
    password2: '',
  })

  const handleOnChange = (e)=> {
    const value = e.target.value;
    const key = e.target.id
    setDatas((date) => ({
        ...date,
        
        [key]: value,
      }));
      
  }
  const handleOnForm = () => {
    null
  }
  
  return (
  <S.Container>
    <Header Title='Crie sua conta' SubTitle='Sua alta performance te aguarda no lado da produtividade'/>
    <section>
        <Input Placeholder='Nome completo' Icon={faUser} Type={'text'} onChange={handleOnChange } Id={'name'} Value={datas.name}/>
        <Input Placeholder='Digite seu e-mail' Icon={faEnvelope} Type={'email'} onChange={handleOnChange } Id={'email'} Value={datas.email}/>
        <Input Placeholder='Digite seu DDD + Whatsapp ' Icon={faMobile} Type={'tel'} onChange={handleOnChange } Id={'tel'} Value={datas.tel}/>
        <Input Placeholder='Nome da sua empresa' Icon={faBuilding} Type={'text'} onChange={handleOnChange } Id={'company'} Value={datas.company}/>
        <Input Placeholder='Crie sua senha' Icon={faLock} Type={'password'} onChange={handleOnChange } Id={'password'} Value={datas.password}/>
        <Input Placeholder='Confirme sua senha' Icon={faLock} Type={'password'} onChange={handleOnChange } Id={'password2'} Value={datas.password2}/> 
        <ButtonSubmit Text='Próximo passo' Icon={faArrowRight} onClick={ handleOnForm }/>

        <S.Link> 
            <span>Já tem uma conta? <a href="../login">CLIQUE AQUI</a></span>
        </S.Link>
    </section>
    

  </S.Container> 
  )
}
CreateAccount.getLayout = function getLayout(page) {
  return (
      <GuestLayout>{page}</GuestLayout>
  )
}
