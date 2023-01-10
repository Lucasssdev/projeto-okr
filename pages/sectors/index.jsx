import MainLayout from "../../assets/Layout/MainLayout";
import * as S from "../../assets/Styles/Sectors";
import React, { useState, useEffect } from "react";
import Input from "../../assets/Componets/Inputs/Input";
import axios from "axios";
import useBearStore from "../../assets/Util/zustand";
import {Decode, Encode} from "../../src/decodeBase64";

export default function Sectors() {

  const myCompany = useBearStore((state) => state.myCompany);
  const [company, setCompany] = useState();
  const [sector, setsector] = useState({});
  const [allSector, setAllSector] = useState([]);
  
  
    

  
  const getSectors = async (id) => {
    console.log(id, "ID");
    await axios
      .get("../api/Sectors/sector?companyId=" + id)
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
          setAllSector(response.data);
          
        }
      })
      .catch((error) => {
        return error, console.log("nao foii");
      });
  };
 

  const createSector = async () => {
    if (sector.name != "") {
      await axios
        .post("../api/Sectors/sector", {
          data: {
            sector,
          },
        })
        .then(function (response) {
          console.log(response);
          if (response.status == 200) {
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleOnChange = (e) => {
    const value = e.target.value;
    const key = e.target.id;
    setsector((data) => ({
      ...data,

      [key]: value,
    }));
  };

  
  useEffect(() => {
    console.log(allSector);
  }, [allSector]);
  useEffect(() => {
    console.log(sector);
  }, [sector]);
  useEffect(() => {
    if(myCompany){
      setCompany(() => Decode(myCompany));
      
    }
    
  }, [myCompany]);
  useEffect(() => {
    if(company){
      getSectors(company.id)
      setsector({
        name: "",
        company_id: company.id,
      });
    }
    
  }, [company]);
  return (
    <S.Div>
      <Input
        Type={"text"}
        onChange={handleOnChange}
        Id={"name"}
        Value={sector.name}
        Placeholder={"Novo setor"}
      />
      <button onClick={createSector}>create</button>
    </S.Div>
  );
}

Sectors.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
