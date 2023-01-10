import MainLayout from "../../assets/Layout/MainLayout";
import * as S from "../../assets/Styles/Profiles/company";
import EditInput from "../../assets/Componets/Inputs/EditInput";
import React, { useEffect, useState } from "react";
import { faArrowRight } from "@fortawesome/pro-thin-svg-icons";
import ButtonSubmit from "../../assets/Componets/Buttons/ButtonSubmit";
import axios from "axios";
import settingsCss from "../../Util/SettingsCss";
import UserItem from "../../assets/Componets/UserItem";
import DynamicInput from "../../assets/Componets/Inputs/DynamicInput";
import cnpjMask from "../../assets/Mask/cnpjMask";
import phoneMask from "../../assets/Mask/phoneMask";
import useBearStore from "../../assets/Util/zustand";
import {Decode, Encode} from "../../src/decodeBase64";
export default function ProfileUser() {
  // const router = useRouter();
  const setMyCompany = useBearStore((state) => state.setCompany);
  const myCompany = useBearStore((state) => state.myCompany);
  const [tab, setTab] = useState(1);
  const [team, setTeam] = useState([]);
  const [company, setCompany] = useState();
  const [emails, setEmails] = useState({
    firstEmail: "",
    secondEmail: "",
  });

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
    if (key === "cnpj") {
      value.length < 19
        ? setCompany({
            ...company,

            [key]: cnpjMask(value),
          })
        : null;
    } else if (key === "tel") {
      value.length < 16
        ? setCompany({
            ...company,

            [key]: phoneMask(value),
          })
        : null;
    } else {
      setCompany({
        ...company,
        [key]: value,
      });
    }
  };
  const submitData = async (e) => {
    const newData = { id: company?.id, [e.target.id]: e.target.value };
    await axios
      .put("../api/Company/company", {
        data: newData,
      })
      .then(function (response) {
        console.log("+++", response);
        setMyCompany(Encode(company))
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleInviteTeam = async () => {
    const companyId = company?.id;
    for (let data in emails) {
      console.log(data, "DATAA");
      if (emails[data] == "") {
        delete emails[data];
      }
    }

    const team = Object.values(emails);

    console.log(team, "TEAM", companyId);

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
            await getTeam(companyId);
            let newField = {};
            setEmails(newField);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (company) getTeam(company.id);
    console.log(company);
  }, [company]);
  useEffect(() => {
    setCompany(() => Decode(myCompany));
  }, [myCompany]);

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
              onBlur={submitData}
              Label={"Nome da empresa"}
              Type={"text"}
              onChange={handleOnChange}
              Value={company?.name}
              Id={"name"}
            />
            <EditInput
              onBlur={submitData}
              Label={"Documento Fiscal (CNPJ)"}
              Placeholder={"Clique aqui para informar"}
              Type={"text"}
              Value={company?.cnpj}
              onChange={handleOnChange}
              Id={"cnpj"}
            />
            <EditInput
              onBlur={submitData}
              Label={"Perfil do Instagram"}
              Placeholder={"Clique aqui para informar"}
              Type={"text"}
              onChange={handleOnChange}
              Value={company?.instagram}
              Id={"instagram"}
            />
            <EditInput
              onBlur={submitData}
              Label={"Endereço da empresa"}
              Placeholder={"Clique aqui para informar"}
              Type={"text"}
              onChange={handleOnChange}
              Value={company?.address}
              Id={"address"}
            />
            <EditInput
              onBlur={submitData}
              Label={"DDD + Telefone"}
              Placeholder={"Clique aqui para informar"}
              Type={"text"}
              onChange={handleOnChange}
              Value={company?.tel}
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
