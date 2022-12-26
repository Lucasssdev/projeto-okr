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
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCookie } from "cookies-next";
import { isValid } from "../../../src/jwt/isValidToken";
import { useRouter } from "next/router";

export default function MainLayout({ children }) {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [company, setCompany] = useState({});
  const appToken = getCookie("userLogged") ?? null;

  const payload = async (token) => {
    const payload = await isValid(token);
    setUser({
      id: payload?.user.id,
      name: payload?.user.name,
      email: payload?.user.email,
    });
    setCompany({
      id: payload?.user.company.id,
      name: payload?.user.company.name,
    })
  };
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
          <Image width={250} src={logoPurple} alt="logo" />
        </S.Logo>
        <S.Options>
          <div>
            <ButtonMain Icon={faHouse} Text={"Inicio"} onClick={""} />
            <ButtonMain
              Icon={faBookBookmark}
              Text={"Setor"}
              onClick={() => {
                router.push("/a");
              }}
            />
          </div>
          <S.Footer>
          <S.Profile
              onClick={() => {
                router.push("/profile/company");
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faBuilding} size="xl" />
              {company.name}
            </S.Profile>
            <S.Profile
              onClick={() => {
                router.push("/profile/user");
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faPlusCircle} size="xl" />
              {user.name}
            </S.Profile>
            <ButtonMain Icon={faSignIn} Text={"Sair do Gestor OKR"} />
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
          <S.Button>
            <span>
              Adicionar <strong>OKR</strong>
            </span>
            <FontAwesomeIcon icon={faPlusCircle} size="xl" />
          </S.Button>
        </S.Header>
        {/*showSearch ?  <SearchList result={result} getSearch={getSearch} search={search}/> : <article>{children}</article> */}
        <article>{children}</article>
      </S.ContainerMain>
    </S.Container>
  );
}
