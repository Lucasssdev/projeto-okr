/* eslint-disable react/prop-types */
import * as S from "./styles";
import React, { useEffect, useState } from "react";
import logoPurple from "../../../public/logoPurple.svg";
import Image from "next/image";
import ButtonMain from "../../Componets/Buttons/ButtonMain";
import InputSearch from "../../Componets/Inputs/InputSearch";
import {
  faBuilding,
  faHouse,
  faBookBookmark,
  faSignIn,
  faMagnifyingGlass,
} from "@fortawesome/pro-regular-svg-icons";
import { getCookie } from "cookies-next";
import { isValid } from "../../../src/jwt/isValidToken";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";
import DialogCreateOkr from "../../Componets/Modal";
import userProfile from "../../../public/userProfile.svg";
import axios from "axios";

export default function MainLayout({ children }) {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [company, setCompany] = useState({});
  const appToken = getCookie("userLogged") ?? null;

  const payload = async (token) => {
    const payload = await isValid(token);
    getUser(payload?.user.id);
    setCompany({
      id: payload?.user.company.id,
      name: payload?.user.company.name,
    });
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
  const logout = () => {
    deleteCookie("userLogged");
    router.push("/login");
  };

  const imageProfile = user.imageProfile ?? userProfile;
  useEffect(() => {
    payload(appToken);
  }, []);
  useEffect(() => {
    console.log(user);
  }, [user]);

  /* const admin = dados?.admin || false;
    console.log(admin)
    const empresa = dados?.company || null;

    const [search,setSearch] = useState({
        string: ''
    })
    const [result,setResult] = useState([])
    const [showSearch,setShowSearch] = useState(false)

   
    
    const getSearch= async (namePatrimony)=>{
   
        console.log(namePatrimony);
        
        await axios.get('http://localhost:3001/patrimony/patrimonies/search',{
            params: {name: namePatrimony, codEmpresa: empresa.id,},
        })
        .then((res)=>{
            console.log('BUSCANDO')
            console.log(res.data,'++++++++++++')
            setResult(res.data)  ;
        })
        //return patrimonies;
    }
    
    const submitSearch= async ()=>{
        console.log('Realizando a busca...')
       const result = await  getSearch(search.patrimony);
        console.log('Dados da busca ');
        console.table( result);
    }

    const handleOnSearch = async (e) => {  
        const key = e.target.id;
        const value = e.target.value;
           
            setSearch((search) => (
                value == ' '
                ?{ 
                    ...search,
                    [key]:  value.trim(),
                }
                :{
                    ...search,
                    [key]:  value,
                }
            ));

            if( value != '' && value != ' '){
                console.log('entrou')
                 await getSearch(value)
                setShowSearch(true)
            }else{
                setShowSearch(false)
            }
             
    }
    */
  return (
    <S.Container>
      <S.Main>
        <S.Logo>
          <Image width={200} src={logoPurple} alt="logo" />
        </S.Logo>
        <S.Options>
          <div>
            <ButtonMain
              Route={"/dashboard"}
              Icon={faHouse}
              Text={"Inicio"}
              onClick={() => {
                router.push("/dashboard");
              }}
            />
            <ButtonMain
              Route={"/sectors"}
              Icon={faBookBookmark}
              Text={"Setor"}
              onClick={() => {
                router.push("/sectors");
              }}
            />
          </div>
          <S.Footer>
            <ButtonMain
              Route={"/profile/user"}
              image={imageProfile}
              Text={user.name}
              onClick={() => {
                router.push("/profile/user");
              }}
            />
            <ButtonMain
              Route={""}
              Icon={faSignIn}
              Text={"Sair do Gestor OKR"}
              onClick={logout}
            />
            <ButtonMain
              Route={"/profile/company"}
              Icon={faBuilding}
              Text={company.name}
              onClick={() => {
                router.push("/profile/company");
              }}
            />
          </S.Footer>
        </S.Options>
      </S.Main>
      <S.ContainerMain>
        <S.Header>
          <S.Search>
            <InputSearch
              Placeholder="Pesquisao OKR ou Setor"
              Icon={faMagnifyingGlass}
            />
          </S.Search>
          <DialogCreateOkr user={user.id} company={company.id} />
        </S.Header>
        {/*showSearch ?  <SearchList result={result} getSearch={getSearch} search={search}/> : <article>{children}</article> */}
        <article>{children}</article>
      </S.ContainerMain>
    </S.Container>
  );
}
