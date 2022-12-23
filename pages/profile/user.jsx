import MainLayout from "../../assets/Layout/MainLayout";
import * as S from "../../assets/Styles/Profiles/user";
import EditInput from "../../assets/Componets/Inputs/EditInput";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { isValid } from "../../src/jwt/isValidToken";
import settingsCss from "../../Util/SettingsCss";
import { getCookie } from "cookies-next";

export default function ProfileUser() {
  // const router = useRouter();
  const [tabPass, setTabPass] = useState(false);
  const [user, setUser] = useState({
    name: "",
    cpf: "",
    tel: "",
    emai: "",
    password: "",
  });
  const appToken = getCookie("userLogged") ?? null;

  const Payload = async (token) => {
    const payload = await isValid(token);
    console.log(payload.user,'++')
    getUser(payload.user.id)
    
  };

  const getUser = (id) => {
    console.log(id,'ID')
    axios.get("../api/Users/user?id="+id

    ).then(function (response) {
        if(response.status === 200){ 
            setUser(response.data)
            console.log(response.data)
        }
    }).catch(error => {return error, console.log('nao foii')}); 
            
    }

  const handleOnChange = (e) => {
    const value = e.target.value;
    const key = e.target.id;
    setUser((date) => ({
      ...date,

      [key]: value,
    }));
  };
  const submitData = (prop) => {
    const newData = { id: user.id, [prop]: user[prop] };
    axios
      .put("../api/Users/user", {
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
    console.log(user);
  }, [user]);
  return (
    <S.Container>
      <S.Tab>
        <div>
          <S.TabButton
            size={!tabPass ? "16px" : "14px"}
            color={!tabPass ? settingsCss.colorDetails : "#fff"}
            onClick={() => {
              setTabPass(false);
            }}
          >
            meu <strong>perfil</strong>
          </S.TabButton>
        </div>
        <div>
          <S.TabButton
            size={tabPass ? "16px" : "14px"}
            color={tabPass ? settingsCss.colorDetails : "#fff"}
            onClick={() => {
              setTabPass(true);
            }}
          >
            minha <strong>senha</strong>
          </S.TabButton>
        </div>
      </S.Tab>
      {!tabPass ? (
        <S.Profile>
          <S.ImageDiv>
            <S.Image>photo</S.Image>
            <a>
              alterar <strong>imagem</strong>
            </a>
          </S.ImageDiv>
          <S.Data>
            <EditInput
              onBlur={() => submitData("name")}
              Label={"Nome Completo"}
              Type={"text"}
              onChange={handleOnChange}
              Value={user.name}
              Id={"name"}
            />
            <EditInput
              onBlur={() => submitData("cpf")}
              Label={"Documento Fiscal (CPF)"}
              Placeholder={"Clique aqui para informar"}
              Type={"text"}
              Value={user.cpf}
              onChange={handleOnChange}
              Id={"cpf"}
            />
            <EditInput
              onBlur={() => submitData("tel")}
              Label={"Whatsapp"}
              Placeholder={"Clique aqui para informar"}
              Type={"text"}
              onChange={handleOnChange}
              Value={user.tel}
              Id={"tel"}
            />

            <span>
              Meu E-mail<text>{user.emai}</text>
            </span>
          </S.Data>
        </S.Profile>
      ) : (
        <S.DivPass>
          <EditInput
            Label={"Senha"}
            Type={"text"}
            onChange={handleOnChange}
            Value={user.password}
            Id={"password"}
          />
        </S.DivPass>
      )}
    </S.Container>
  );
}
ProfileUser.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
