import MainLayout from "../../assets/Layout/MainLayout";
import * as S from "../../assets/Styles/Profiles/user";
import EditInput from "../../assets/Componets/Inputs/EditInput";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { isValid } from "../../src/jwt/isValidToken";
import settingsCss from "../../Util/SettingsCss";
import { getCookie } from "cookies-next";
import ButtonSubmit from "../../assets/Componets/Buttons/ButtonSubmit";
import { faArrowRight } from "@fortawesome/pro-thin-svg-icons";
import Image from "next/image";
import userProfile from '../../public/userProfile.svg'

export default function ProfileUser() {
  // const router = useRouter();
  const [tabPass, setTabPass] = useState(false);
  const [user, setUser] = useState({
    name: "",
    cpf: "",
    tel: "",
    email: "",
    password: "",
    passwordCurrent: "",
    newPassword1: "",
    newPassword2: "",
  });

  const appToken = getCookie("userLogged") ?? null;

  const Payload = async (token) => {
    const payload = await isValid(token);
    console.log(payload.user, "++");
    getUser(payload.user.id);
  };

  const getUser = async (id) => {
    console.log(id, "ID");
    await axios
      .get("../api/Users/user?id=" + id)
      .then(function (response) {
        if (response.status === 200) {
          setUser(response.data);
          console.log(response.data);
          //setBase64code(response.data.imageProfile);
        }
      })
      .catch((error) => {
        return error, console.log("nao foii");
      });
  };

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

  const handlePassword = async () => {
    if (user.newPassword1 == user.newPassword2) {
      const newPass = {
        id: user.id,
        newPassword: user.newPassword1,
        currentPassword: user.passwordCurrent,
        bdPassword: user.password,
      };
      await axios
        .put("../api/Users/password", {
          data: newPass,
        })
        .then(function (response) {
          console.log("+++", response);
          Payload(appToken);
          setUser({
            ...user,
            passwordCurrent: "",
            newPassword1: "",
            newPassword2: "",
          });
        })
        .catch((error) => {
          console.log(error);
          //router.push("/login");
        });
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
          data: { id: user.id, imageProfile: reader.result },
        })
        .then(function (response) {
          console.log("+++", response);
          getUser(user.id);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }
  
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
            <S.Image>
              <Image
                src={user.imageProfile ?? userProfile }
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
              Meu E-mail<text>{user.email}</text>
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
            Value={user.passwordCurrent}
            Id={"passwordCurrent"}
          />
          <EditInput
            Placeholder={"Digite aqui a sua nova senha"}
            Label={"Nova senha"}
            Type={"password"}
            onChange={handleOnChange}
            Value={user.newPassword1}
            Id={"newPassword1"}
          />
          <EditInput
            Placeholder={"Repita a nova senha"}
            Label={"Confirme a nova senha"}
            Type={"password"}
            onChange={handleOnChange}
            Value={user.newPassword2}
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
