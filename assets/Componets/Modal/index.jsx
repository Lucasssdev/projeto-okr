import React, { useState, useEffect } from "react";
import * as S from './styles'
import axios from "axios";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const DialogCreateOkr = () => {
    
   


    const [showModal, setShowModal] = useState(false);
    const [category, setCategory] = useState({
        name: "",
        //companyCod: empresa?.id || null,
    })
    const handleOnChange = (e) => {

        const key = e.target.id;
        const value = e.target.value;
        setCategory((category) => ({
            ...category,

            [key]: value,
        }));

    }
    const handleCancel = () => {
        setShowModal(false)
    }

    const handleSubmitForm = () => {
       
        
        if(category.name != '' ){
            axios.post("http://localhost:3001/category/create", {
                data: category

            }).then(function (response) {
                
                setShowModal(false)
                
                setCategory({
                    name: "",
                    companyCod:''
                })
            }).catch(error => { return error; });
        }else{
            alert('Preencha o campo')
            return
        } 
                
         
    }

    useEffect(() => {
        console.log(category)
    }, [category])



    return (
        <S.Container>
            <S.DivExtern>
            <S.ButtonExt onClick={() => setShowModal(true)}>
            <span>
              Adicionar <strong>OKR</strong>
            </span>
            <FontAwesomeIcon icon={faPlusCircle} size="xl" />
          </S.ButtonExt>
            </S.DivExtern>
            {showModal ? (
                <S.DivModal>
                    <S.CancelZone onClick={handleCancel}></S.CancelZone>
                    <S.DivModalWrapper>
                        <S.Fomr>

                            <S.ButtonX onClick={handleCancel}>x</S.ButtonX>

                            <label htmlFor="name">Criar nova categoria</label>
                            <section>
                                <button onClick={handleSubmitForm}>Cadastrar</button>
                            </section>

                        </S.Fomr>
                    </S.DivModalWrapper>
                </S.DivModal>
            ) : null}

        </S.Container>
    );
};

export default DialogCreateOkr;
