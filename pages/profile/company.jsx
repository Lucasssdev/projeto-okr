import MainLayout from "../../assets/Layout/MainLayout";
import * as S from "../../assets/Styles/Profiles/company";
import EditInput from "../../assets/Componets/Inputs/EditInput";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { isValid } from "../../src/jwt/isValidToken";
import settingsCss from "../../Util/SettingsCss";
import { getCookie } from "cookies-next";

export default function ProfileUser() {
  // const router = useRouter();
  const [tab, setTab] = useState(1);
  const [company, setCompany] = useState({
    id : '',    
    name  : '',
    cnpj : '',
    tel : '',
    instagram : '',
    address : '',
  });
 
  const appToken = getCookie("userLogged") ?? null;

  const Payload = async (token) => {
    const payload = await isValid(token);
    console.log(payload.user,'++')
    getCompany(payload.user.company.id)
    
  };

  const getCompany = (id) => {
    console.log(id,'ID')
    axios.get("../api/Company/company?id="+id

    ).then(function (response) {
        if(response.status === 200){ 
            setCompany(response.data)
            console.log(response.data)
            
        }
    }).catch(error => {return error, console.log('nao foii')}); 
            
    }

  const handleOnChange = (e) => {
    const value = e.target.value;
    const key = e.target.id;
    setCompany((date) => ({
      ...date,

      [key]: value,
    }));
  };
  const submitData = (prop) => {
    const newData = { id: company.id, [prop]: company[prop] };
    axios
      .put("../api/Company/company", {
        data: newData,
      })
      .then(function (response) {
        console.log("+++", response);
        Payload(appToken);
      })
      .catch((error) => {
        console.log(error);
        //router.push("/login");
      });
  };

  
  useEffect(() => {
    Payload(appToken);
  }, []);
  useEffect(() => {
    console.log(company);
  }, [company]);
  return (
    <S.Container>
      <S.Tab>
        <div>
          <S.TabButton
            size={tab == 0 ? "16px" : "14px"}
            color={tab == 0 ? settingsCss.colorDetails : "#fff"}
            onClick={() => {
              setTab(0);
            }}
          >
            minhas <strong>opções</strong>
          </S.TabButton>
        </div>
        <div>
          <S.TabButton
            size={tab == 1 ? "16px" : "14px"}
            color={tab == 1 ? settingsCss.colorDetails : "#fff"}
            onClick={() => {
              setTab(1);
            }}
          >
            minha <strong>empresa</strong>
          </S.TabButton>
        </div>
        <div>
          <S.TabButton
            size={tab == 2 ? "16px" : "14px"}
            color={tab == 2 ? settingsCss.colorDetails : "#fff"}
            onClick={() => {
              setTab(2);
            }}
          >
            meu <strong>time</strong>
          </S.TabButton>
        </div>
      </S.Tab>
      {tab == 1 ? (
        <S.Profile>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ab possimus deleniti expedita optio dolor vero libero, magni ea cumque, illum cupiditate omnis dolorem sequi enim dolorum iure tempore aliquam!</p>
          <S.Data>
            <EditInput
              onBlur={() => submitData("name")}
              Label={"Nome da empresa"}
              Type={"text"}
              onChange={handleOnChange}
              Value={company.name}
              Id={"name"}
            />
            <EditInput
              onBlur={() => submitData("cnpj")}
              Label={"Documento Fiscal (CNPJ)"}
              Placeholder={"Clique aqui para informar"}
              Type={"text"}
              Value={company.cnpj}
              onChange={handleOnChange}
              Id={"cpf"}
            />
            <EditInput
              onBlur={() => submitData("instagram")}
              Label={"Perfil do Instagram"}
              Placeholder={"Clique aqui para informar"}
              Type={"text"}
              onChange={handleOnChange}
              Value={company.instagram}
              Id={"instagram"}
            />
            <EditInput
              onBlur={() => submitData("address")}
              Label={"Endereço da empresa"}
              Placeholder={"Clique aqui para informar"}
              Type={"text"}
              onChange={handleOnChange}
              Value={company.address}
              Id={"address"}
            />
            <EditInput
              onBlur={() => submitData("tel")}
              Label={"DDD + Telefone"}
              Placeholder={"Clique aqui para informar"}
              Type={"text"}
              onChange={handleOnChange}
              Value={company.tel}
              Id={"tel"}
            />
          </S.Data>
        </S.Profile>
      ) : tab == 2 ?  (
        <S.DivPass>
          
        </S.DivPass>
      ) : null}
    </S.Container>
  );
}
ProfileUser.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
