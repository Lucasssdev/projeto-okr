import MainLayout from "../../assets/Layout/MainLayout";
import * as S from "../../assets/Styles/Profiles/user";
import EditInput from "../../assets/Componets/Inputs/EditInput";
import React, { useEffect, useState } from "react";
import axios from "axios";
import settingsCss from "../../assets/Util/SettingsCss";
import ButtonSubmit from "../../assets/Componets/Buttons/ButtonSubmit";
import { faArrowRight } from "@fortawesome/pro-thin-svg-icons";
import Image from "next/image";
import userProfile from '../../public/userProfile.svg'
import cpfMask from "../../assets/Mask/cpfMask";
import phoneMask from "../../assets/Mask/phoneMask";
import useBearStore from "../../assets/Util/zustand"
import {Decode , Encode} from "../../src/decodeBase64";

export default function ProfileUser() {
  // const router = useRouter();
  const [tabPass, setTabPass] = useState(false);
  
  const [myUser, setMyUser] = useState()
  const user = useBearStore((state) => state.myUser) 
  const setUser = useBearStore((state) => state.setUser) 

  const handleOnChange = (e) => {
    const value = e.target.value;
    const key = e.target.id;
    if(key === 'cpf'){
     setMyUser(({
      ...myUser,
        [key]: cpfMask(value),
      }))
     
    }else if(key === "tel"){
      value.length < 16
      ? setMyUser(({
        ...myUser,

        [key]: phoneMask(value),
      }))
      : null
  }else{
      setMyUser(({
          ...myUser,
          
          [key]: value,
      }));
  }
  };

  const submitData = async (prop) => {
    const newData = { id: myUser.id, [prop]: myUser[prop] };
    await axios
      .put("../api/Users/user", {
        data: newData,
      })
      .then(function (response) {
        console.log("+++", response);
      })
      .catch((error) => {
        console.log(error);
        
      });
  };

  const handlePassword = async () => {
    if (myUser.newPassword1 == myUser.newPassword2) {
      const newPass = {
        id: myUser.id,
        newPassword: myUser.newPassword1,
        currentPassword: myUser.passwordCurrent,
        bdPassword: myUser.password,
      };
      await axios
        .put("../api/Users/password", {
          data: newPass,
        })
        .then(function (response) {
          
          console.log("+++", response);
          setMyUser({
            ...myUser,
            passwordCurrent: "",
            newPassword1: "",
            newPassword2: "",
          });
          for( let data in myUser){
            if(data == 'passwordCurrent' || data == 'newPassword1' || data == 'newPassword2' ){
              delete myUser[data]
            }
          }
          setMyUser(myUser)
      
        })
        .catch((error) => {
          if(error.response.data == 'Senha atual invalida'){
            alert(error.response.data)
            return
          }
          console.log(error);
          
        });
    }else{
      alert('A nova senha não correponde a sua confirmação')
      return
    }
  };


  async function handleImageChange(event) {
    const file = event.target.files[0]
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      console.log(reader);

      await axios
        .put("../api/Users/user", {
          data: { id: myUser.id, imageProfile: reader.result },
        })
        .then(function (response) {
          console.log("+++", response);
          setMyUser(({
            ...myUser,
            
            imageProfile: reader.result,
        }));
        
       
        })
        .catch((error) => {
          console.log(error);
        });

    };
    
  }
  const imageProgile = myUser?.imageProfile ?? userProfile 
  
  useEffect(()=>{
    setMyUser(() => Decode(user))
    console.log(user)
 },[user])
 useEffect(()=>{
  setUser(Encode(myUser))
  console.log(myUser)
},[myUser])

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
            <S.Image>
              <Image
                src={imageProgile}
                alt="Select image"
                width="200"
                height="200"
              />
            </S.Image>
            <label htmlFor="imgProfile">
              alterar <strong>imagem</strong>
            </label>
            <input type="file" id="imgProfile" onChange={handleImageChange} />
          </S.ImageDiv>
          <S.Data>
            <EditInput
              onBlur={() => submitData("name")}
              Label={"Nome Completo"}
              Type={"text"}
              onChange={handleOnChange}
              Value={myUser?.name}
              Id={"name"}
            />
            <EditInput
              onBlur={() => submitData("cpf")}
              Label={"Documento Fiscal (CPF)"}
              Placeholder={"Clique aqui para informar"}
              Type={"text"}
              Value={myUser?.cpf}
              onChange={handleOnChange}
              Id={"cpf"}
            />
            <EditInput
              onBlur={() => submitData("tel")}
              Label={"Whatsapp"}
              Placeholder={"Clique aqui para informar"}
              Type={"text"}
              onChange={handleOnChange}
              Value={myUser?.tel}
              Id={"tel"}
            />

            <span>
              Meu E-mail<text>{myUser?.email}</text>
            </span>
          </S.Data>
        </S.Profile>
      ) : (
        <S.DivPass>
          <p>Altere sua senha</p>
          <EditInput
            Placeholder={"Digite aqui a senha que você usa para logar"}
            Label={"Senha atual"}
            Type={"password"}
            onChange={handleOnChange}
            Value={myUser?.passwordCurrent}
            Id={"passwordCurrent"}
          />
          <EditInput
            Placeholder={"Digite aqui a sua nova senha"}
            Label={"Nova senha"}
            Type={"password"}
            onChange={handleOnChange}
            Value={myUser?.newPassword1}
            Id={"newPassword1"}
          />
          <EditInput
            Placeholder={"Repita a nova senha"}
            Label={"Confirme a nova senha"}
            Type={"password"}
            onChange={handleOnChange}
            Value={myUser?.newPassword2}
            Id={"newPassword2"}
          />
          <ButtonSubmit
            Text={"Alterar"}
            onClick={handlePassword}
            Icon={faArrowRight}
          />
        </S.DivPass>
      )}
    </S.Container>
  );
}
ProfileUser.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
