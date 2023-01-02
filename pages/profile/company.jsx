import MainLayout from "../../assets/Layout/MainLayout";
import * as S from "../../assets/Styles/Profiles/company";
import EditInput from "../../assets/Componets/Inputs/EditInput";
import React, { useEffect, useState } from "react";
import { faArrowRight } from "@fortawesome/pro-thin-svg-icons";
import ButtonSubmit from '../../assets/Componets/Buttons/ButtonSubmit'
import axios from "axios";
import { isValid } from "../../src/jwt/isValidToken";
import settingsCss from "../../Util/SettingsCss";
import { getCookie } from "cookies-next";
import UserItem from "../../assets/Componets/UserItem";
import DynamicInput from "../../assets/Componets/Inputs/DynamicInput";

export default function ProfileUser() {
  // const router = useRouter();
  const [tab, setTab] = useState(1);
  const [team, setTeam] = useState([]);
  const [company, setCompany] = useState({
    id: "",
    name: "",
    cnpj: "",
    tel: "",
    instagram: "",
    address: "",
  });

  const [emails, setEmails] = useState({
    firstEmail: "",
    secondEmail: "",
  });

  const appToken = getCookie("userLogged") ?? null;

  const Payload = async (token) => {
    const payload = await isValid(token);
    console.log(payload?.user, "++");
    getCompany(payload?.user.company.id);
    getTeam(payload?.user.company.id);
  };

  const getCompany = (id) => {
    console.log(id, "ID");
    axios
      .get("../api/Company/company?id=" + id)
      .then(function (response) {
        if (response.status === 200) {
          setCompany(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        return error, console.log("nao foii");
      });
  };
  const getTeam = async (id) => {
    console.log(id, "ID");
    await axios
      .get("../api/Users/user?companyId=" + id)
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
          setTeam(response.data);
          
        }
      })
      .catch((error) => {
        return error, console.log("nao foii");
      });
  };
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
  const handleInviteTeam = async () => {
   const companyId = company.id
    for (let data in emails) {
      console.log(data, "DATAA");
      if (emails[data] == "") {
        delete emails[data];
      }
    }

    const team = Object.values(emails);
  
    console.log(team, "TEAM", companyId)
    
    if (team.length > 0) {
      await axios
        .post("../api/Users/user", {
          data: {
            team,
            companyId,
          },
        })
        .then(async function (response) {
          console.log(response);
          if (response.status == 200) {
            console.log(response);
            await getTeam(companyId)
            let newField = {}
            setEmails(newField)
           
          }
        })
        .catch((error) => {
          console.log(error);
        });
        
    }
  };
  useEffect(() => {
    Payload(appToken);
  }, []);
  useEffect(() => {
    console.log(emails)
  }, [emails]);
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
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ab
            possimus deleniti expedita optio dolor vero libero, magni ea cumque,
            illum cupiditate omnis dolorem sequi enim dolorum iure tempore
            aliquam!
          </p>
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
              Id={"cnpj"}
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
      ) : tab == 2 ? (
        <S.MyTeam>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            eligendi provident alias facere dolor. Recusandae fugit, similique
            explicabo harum vel sapiente eius qui architecto, reiciendis, alias
            impedit nostrum? In, distinctio?
          </span>
          <section>
            <S.ListTeam>
              {team.map((user, key) => (
                <UserItem user={user} key={key} />
              ))}
            </S.ListTeam>
            <S.Invite>
              <span>
                ENVIAR <strong>CONVITE</strong>
              </span>
              <DynamicInput emails={emails} setEmails={setEmails} />
              <ButtonSubmit
          Text="CONCLUIR CADASTRO"
          Icon={faArrowRight}
          onClick={handleInviteTeam}
        />
            </S.Invite>
          </section>
        </S.MyTeam>
      ) : null}
    </S.Container>
  );
}
ProfileUser.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
