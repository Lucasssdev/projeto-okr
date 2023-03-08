import MainLayout from "../../assets/Layout/MainLayout";
import * as S from "../../assets/Styles/Sectors";
import React, { useState, useEffect } from "react";
import SectorInfos from "../../assets/Componets/SectorInfos";
import axios from "axios";
import useBearStore from "../../assets/Util/zustand";
import { Decode } from "../../src/decodeBase64";
import SectorCard from "../../assets/Componets/SectorCard";
import DialogCreateSector from "../../assets/Componets/ModalSector";
export default function Sectors() {
  const myCompany = useBearStore((state) => state.myCompany);
  const [company, setCompany] = useState();
  const [sector, setSector] = useState({});
  const [allSector, setAllSector] = useState([]);
  const [modalSector, setModalSector] = useState(false);
  const [sectorSelected, setSectorSelected] = useState({});
  const [team, setTeam] = useState([]);

  const getTeam = async (id) => {
    await axios
      .get("../api/Users/user?companyId=" + id)
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
          setTeam(response.data);
        }
      })
      .catch((error) => {
        return error, console.log(error);
      });
  };
  const getSectors = async (id) => {
    await axios
      .get("../api/Sectors/sector?companyId=" + id)
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
          setAllSector(response.data);
        }
      })
      .catch((error) => {
        return error, console.log(error);
      });
  };

  const createSector = async (e) => {
    e.preventDefault();
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
            setSector({
              name: "",
              company_id: company.id,
            });
            getSectors(company.id);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (myCompany) {
      setCompany(() => Decode(myCompany));
    }
  }, [myCompany]);
  useEffect(() => {
   
    console.log(team, allSector)
  }, [team]);
  useEffect(() => {
    if (company) {
      getSectors(company.id);
      setSector({
        name: "",
        company_id: company.id,
      });
      getTeam(company.id);
    }
  }, [company]);
  return (
    <S.Container>
      <S.Header onClick={() => setModalSector(false)}>
        <S.Title>
          meus <strong>setores</strong>
          <DialogCreateSector
            setSector={setSector}
            createSector={createSector}
            sector={sector}
          />
        </S.Title>
      </S.Header>
      <S.Sectors>
        {!modalSector ? (
          <>
            {allSector.map((sector, index) => (
              <SectorCard
                key={index}
                index={index}
                setModalSector={setModalSector}
                setSectorSelected={setSectorSelected}
                item={sector}
                allUsers={team}
                getTeam={setTeam}
                getSector={setAllSector}
              />
            ))}
          </>
        ) : (
          <SectorInfos
            company={company}
            setModalSector={setModalSector}
            sector={sectorSelected}
            allUsers={team}
            getTeam={setTeam}
            getSector={setAllSector}
          />
        )}
      </S.Sectors>
    </S.Container>
  );
}

Sectors.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
