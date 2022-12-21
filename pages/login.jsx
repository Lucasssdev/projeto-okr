
import GuestLayout from '../assets/Layout/GuestLayout';
import * as S from '../assets/Styles/Login'
import React, { useState } from 'react';
import Input from '../assets/Componets/Inputs/Input';
import {  faLock, faArrowRight, faEnvelope} from '@fortawesome/pro-thin-svg-icons';
import ButtonSubmit from '../assets/Componets/Buttons/ButtonSubmit';
import Header from '../assets/Layout/GuestLayout/Componets/Header';
import {getCookie, setCookie } from 'cookies-next';
import {token} from '../src/jwt'
import { useRouter } from 'next/router';

export default function Login() {

  const [login,setLogin] = useState({ 
    email: "",
    password: '',
  })

  const handleOnChange = (e)=> {
    const value = e.target.value;
    const key = e.target.id
    setLogin((date) => ({
        ...date,
        
        [key]: value,
      }))      
  }
  const handleOnLogin = () => {
    null
  }
  
 

    const router = useRouter();

    const  checkDataFromSubmit =  async (user)=>{
        
        const {name, password} = user;

        if(name == 'Matheus' && password == '123456'){
            const newToken = await GenerateToken(name);
            setCookie('userLogged', newToken);
            return true;
            // router.push('/dashboard');
        }

        return false;
    }
    const GenerateToken = (name)=>{
        
        return token(name);
    }

    const makeLogin = async (user)=>{
        
        if( await checkDataFromSubmit(user)){
            router.push('/');
        }else{
            console.log('ERRO AO LOGIN')
        }
        
    }

    const verifyIfCookieExists = async ()=> {
        const cookieExists =  getCookie('userLogged');
        if(cookieExists){
            router.push('/')
        }
    }
    verifyIfCookieExists();

   


  return (
  <S.Container>
    <Header Title='Realize seu login' SubTitle='Sua alta performance te aguarda no lado da produtividade'/>
    <section>
        <Input Placeholder='E-mail' Icon={faEnvelope} Type={'email'} onChange={handleOnChange } Id={'email'} Value={login.email}/>
        <Input Placeholder='Senha' Icon={faLock} Type={'password'} onChange={handleOnChange } Id={'password'} Value={login.password}/>
        <ButtonSubmit Text='Entrar' Icon={faArrowRight} onClick={handleOnLogin}/>

        <S.Link>
            <span>Não tem uma conta? <a href="./register/createAccount">CADASTRE-SE AQUI</a></span>
            <a href="./register/newPassword">PRECISO DE UMA NOVA SENHA</a>
        </S.Link>
        <button onClick={()=>{makeLogin({name:'Matheus', password: '123456'})}}>CRIAR JWT</button>
    </section>
    

  </S.Container> 
  )
}
Login.getLayout = function getLayout(page) {
  return (
      <GuestLayout>{page}</GuestLayout>
  )
}
