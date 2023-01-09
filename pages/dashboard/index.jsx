import MainLayout from "../../assets/Layout/MainLayout";
import * as S from "../../assets/Styles/Dashboard";
import React from "react";
import Description from "../../assets/Componets/Description";

export default function DashBoard() {
  return (
    <S.Div>
      <S.Colum1>
        <S.Activities>
          <h3>
            minhas <strong>atividades</strong>
          </h3>
          {
            //console.log(keys)
          }
          <Description text={"Descriçao da atividade"} />
          <Description text={"Descriçao da atividade"} />
          <Description text={"Descriçao da atividade"} />
          <Description text={"Descriçao da atividade"} />
          <Description text={"Descriçao da atividade"} />
          <Description text={"Descriçao da atividade"} />
          <Description text={"Descriçao da atividade"} />
          <Description text={"Descriçao da atividade"} />
          <Description text={"Descriçao da atividade"} />
          <Description text={"Descriçao da atividade"} />
          <Description text={"Descriçao da atividade"} />
          <Description text={"Descriçao da atividade"} />
          <Description text={"Descriçao da atividade"} />
          <Description text={"Descriçao da atividade"} />
          <Description text={"Descriçao da atividade"} />
          <Description text={"Descriçao da atividade"} />
          <Description text={"Descriçao da atividade"} />
          <Description text={"Descriçao da atividade"} />
        </S.Activities>
      </S.Colum1>
      <S.Colum2>
        <S.Scores>
          <S.Box>
            45
            <span>
              <strong>tasks</strong> realizadas
            </span>
            <small>
              2022 • q3 • <strong>+10</strong>
            </small>
          </S.Box>
          <S.Box>
            16
            <span>
              <strong>tasks</strong> realizadas
            </span>
            <small>
              2022 • q3 • <strong color='#F3426C'>+10</strong>
            </small>
          </S.Box>
          <S.Box>
            26
            <span>
              <strong>tasks</strong> realizadas
            </span>
            <small>
              2022 • q3 • <strong>+10</strong>
            </small>
          </S.Box>
        </S.Scores>
        <S.Scores>
          <S.Box>
            888
            <span>
              <strong>nota</strong> média
            </span>
            <small>
              2022 • q3 • <strong>+10</strong>
            </small>
          </S.Box>
          <S.Box>
            888
            <span>
              <strong>nota</strong> média
            </span>
            <small>
              2022 • q3 • <strong>+10</strong>
            </small>
          </S.Box>
          <S.Box>
            888
            <span>
              <strong>nota</strong> média
            </span>
            <small>
              2022 • q3 • <strong>+10</strong>
            </small>
          </S.Box>
        </S.Scores>
        <S.Okrs>
          <h3>
            minhas <strong>okrs</strong>
          </h3>
          <S.ListOkrs>
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />
          </S.ListOkrs>
        </S.Okrs>
        <S.History>
          <h3>
            meu <strong>histórico</strong>
          </h3>
          <S.ListOkrs>
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />
            <Description text={"Descrição da okr"} />{" "}
          </S.ListOkrs>
        </S.History>
      </S.Colum2>
    </S.Div>
  );
}
DashBoard.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
