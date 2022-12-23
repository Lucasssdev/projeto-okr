
import MainLayout from '../../assets/Layout/MainLayout';
import * as S from '../../assets/Styles/Profiles/user'
import EditInput from '../../assets/Componets/Inputs/EditInput'
import React from 'react';



export default function ProfileUser() {
  
  
  return (
  <S.Container>
        <S.Tab>
            <div>
            <S.TabButton>meu <strong>perfil</strong></S.TabButton>
            </div>
            <div>
            <S.TabButton>minha <strong>senha</strong></S.TabButton>
            </div>
        </S.Tab>
        <S.Profile>
            <S.ImageDiv>
                <S.Image>photo</S.Image>
                <a>alterar <strong>imagem</strong></a>
            </S.ImageDiv>
            <S.Data>
                <EditInput Label={'Nome Completo'} Placeholder={'Guilherme Aquino'} Type={'text'} onChange={'onChange'} Id={'Id'}/>
                <EditInput Label={'Nome CompletoDocumento Fiscal (CNPJ)'} Placeholder={'888.888.88/8888-88'} Type={'text'} onChange={'onChange'} Id={'Id'}/>
                <EditInput Label={'Perfil do Instagram'} Placeholder={'@clieent'} Type={'text'} onChange={'onChange'} Id={'Id'}/>
                <EditInput Label={'Endereço da empresa'} Placeholder={'Rua dos brandões, 231. Sala 23. Passos/MG'} Type={'text'} onChange={'onChange'} Id={'Id'}/>

            </S.Data>
        </S.Profile>
  </S.Container> 
  )
}
ProfileUser.getLayout = function getLayout(page) {
  return (
      <MainLayout>{page}</MainLayout>
  )
}
