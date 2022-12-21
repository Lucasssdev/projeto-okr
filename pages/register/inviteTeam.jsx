/* eslint-disable react/jsx-key */

import GuestLayout from '../../assets/Layout/GuestLayout';
import * as S from '../../assets/Styles/InviteTeam'
import React, { useEffect, useState } from 'react';
import Input from '../../assets/Componets/Inputs/Input';
import { faEnvelope,faArrowRight } from '@fortawesome/pro-thin-svg-icons';
import { faPlusCircle } from '@fortawesome/pro-solid-svg-icons';
import ButtonSubmit from '../../assets/Componets/Buttons/ButtonSubmit';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from '../../assets/Layout/GuestLayout/Componets/Header';



export default function InviteTeam() {

    const handleOnChange = (e)=>{
        const value = e.target.value;
        const key = e.target.id
        setEmails((email) => ({
            ...email,
            
            [key]: value,
          }));
    }

    const [emails,setEmails] = useState({ 
        firtEmail: "",
        secondEmail: '',
        thirdEmail: '',
        fourthEmail: '', 
        fifthEmail: '',
    })

    const [id,setId] = useState('thirdEmail')
    const [indexArray,setIndexArray] = useState(0)

    const values = [emails.thirdEmail,emails.fourthEmail,emails.fifthEmail]

    const input = <Input Placeholder={'Digite o e-mail do seu colega de trabalho'} Icon={faEnvelope} Type={'email'} Value={values[indexArray+1]} onChange={handleOnChange} Id={id}/>
    const [field,setField] = useState([])

    const newField = () => {//função para novo campo input
        const newArray = [...field]
        newArray.push(input)
        setField(newArray)
        //console.log(field)
    }
    
    const handleInviteTeam = () => {
        null
    }
    useEffect((
        () => {
            setIndexArray(field.length)
            console.log(indexArray)
            if(field.length == 1){
                setId('fourthEmail')
            }
            if(field.length == 2){
                setId('fifthEmail') 
            } 
        console.log(values[indexArray+1],'aquiiii')
        }
        ),[field])
    console.log(typeof field)
    return (
        <S.Container>
            <Header Title='Crie sua conta' SubTitle='Sua alta performance te aguarda no lado da produtividade!'/>
            <section>
                <S.DivInput>
                    <>
                    <Input Placeholder={'Digite o e-mail do seu colega de trabalho'} Icon={faEnvelope} Type={'email'} onChange={handleOnChange} Id={'firtEmail'} Value={emails.fifthEmail}/>
                    <Input Placeholder={'Digite o e-mail do seu colega de trabalho'} Icon={faEnvelope} Type={'email'} onChange={handleOnChange} Id={'secondEmail'} Value={emails.secondEmail}/>

                    {
                        
                        field.map((input,index)=>{
                            
                            if(index < 5 ){
                               
                                return input
                            }
                        })
                    }
                    </>
                </S.DivInput>
                
                <S.NewField>
                    {field.length > 4 ? <></> :<button onClick={newField}><FontAwesomeIcon icon={faPlusCircle} size="3x"/></button>}
                </S.NewField> 
            
                <ButtonSubmit Text='CONCLUIR CADASTRO' Icon={faArrowRight} onClick={handleInviteTeam}/>

                <S.Link>
                    <span>Fique tranquilo se não tiver os e-mails.<br/>Essa etapa pode ser feita em outro momento!</span>
                </S.Link>
            </section>
        </S.Container> 
    )
}
InviteTeam.getLayout = function getLayout(page) {
  return (
      <GuestLayout>{page}</GuestLayout>
  )
}
