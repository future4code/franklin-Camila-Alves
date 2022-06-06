import React, { useState } from "react";
import styled from 'styled-components';
import BotaoEnviar from "../BotaoEnviar/BotaoEnviar";
import InputMensagem from "../InputMensagem/InputMensagem";
import InputNome from "../InputNome/InputNome";

const CampoInput = styled.div `
    display: flex;
    flex-direction: row;
    width: 900px;
    padding: 20px;
    border-radius: 60px;
    background: bisque;
`

const Input = (props) => {

    const { atualizaEstado } = props

    return (
        <CampoInput>
            <InputNome />
            <InputMensagem />
            <BotaoEnviar atualizaEstado={atualizaEstado} />
        </CampoInput>
    )
}

export default Input;